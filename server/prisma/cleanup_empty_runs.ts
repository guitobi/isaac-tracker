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
  console.log('Cleaning up empty runs without items or trinkets...');
  
  const result = await prisma.run.deleteMany({
    where: {
      items: { equals: [] },
      trinkets: { equals: [] },
      isVictory: false,
    },
  });

  console.log(`Deleted ${result.count} empty runs from PostgreSQL database!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
