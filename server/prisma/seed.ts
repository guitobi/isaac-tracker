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
    { id: 11, name: 'Lazarus Risen' },
    { id: 12, name: 'Black Judas' },
    { id: 13, name: 'Lilith' },
    { id: 14, name: 'Keeper' },
    { id: 15, name: 'Apollyon' },
    { id: 16, name: 'The Forgotten' },
    { id: 17, name: 'The Soul' },
    { id: 18, name: 'Bethany' },
    { id: 19, name: 'Jacob & Esau' },
    { id: 21, name: 'Tainted Isaac', isTainted: true },
    { id: 22, name: 'Tainted Magdalene', isTainted: true },
    { id: 23, name: 'Tainted Cain', isTainted: true },
    { id: 24, name: 'Tainted Judas', isTainted: true },
    { id: 25, name: 'Tainted ???', isTainted: true },
    { id: 26, name: 'Tainted Eve', isTainted: true },
    { id: 27, name: 'Tainted Samson', isTainted: true },
    { id: 28, name: 'Tainted Azazel', isTainted: true },
    { id: 29, name: 'Tainted Lazarus', isTainted: true },
    { id: 30, name: 'Tainted Eden', isTainted: true },
    { id: 31, name: 'Tainted Lost', isTainted: true },
    { id: 32, name: 'Tainted Lilith', isTainted: true },
    { id: 33, name: 'Tainted Keeper', isTainted: true },
    { id: 34, name: 'Tainted Apollyon', isTainted: true },
    { id: 35, name: 'Tainted Forgotten', isTainted: true },
    { id: 36, name: 'Tainted Bethany', isTainted: true },
    { id: 37, name: 'Tainted Jacob', isTainted: true },
  ];

  for (const char of characters) {
    await prisma.character.upsert({
      where: { id: char.id },
      update: { name: char.name, isTainted: char.isTainted || false },
      create: char,
    });
  }

  console.log(`Seeded ${characters.length} characters successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
