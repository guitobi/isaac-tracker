import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const runs = await prisma.run.findMany();
    console.log(runs);
}
main().catch(console.error).finally(() => prisma.$disconnect());
