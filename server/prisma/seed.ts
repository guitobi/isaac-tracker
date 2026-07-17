import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  await prisma.user.upsert({
    where: { username: 'Player' },
    update: {},
    create: { username: 'Player' },
  });

  const characters = [
    { id: 0, name: 'Isaac' },
    { id: 1, name: 'Magdalene' },
    { id: 2, name: 'Cain' },
    { id: 3, name: 'Judas' },
    { id: 4, name: '??? (Blue Baby)' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Samson' },
    { id: 7, name: 'Azazel' },
    { id: 8, name: 'Lazarus' },
    { id: 9, name: 'Eden' },
    { id: 10, name: 'The Lost' },
    // ... можеш додати інших пізніше
  ];

  for (const char of characters) {
    await prisma.character.upsert({
      where: { id: char.id },
      update: {},
      create: char,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
