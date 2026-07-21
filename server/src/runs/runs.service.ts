import { Injectable } from '@nestjs/common';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RunsService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: number, createRunDto: CreateRunDto) {
    return this.prisma.run.create({
      data: {
        ...createRunDto,
        userId: userId,
      },
    });
  }

  async findAll() {
    const runs = await this.prisma.run.findMany({
      include: {
        user: true,
        character: true,
      },
      orderBy: { id: 'desc' },
    });

    const allItemIds = [...new Set(runs.flatMap((r) => r.items))];
    const itemsData = await this.prisma.item.findMany({
      where: { id: { in: allItemIds } },
    });
    const itemsMap = new Map(itemsData.map((i) => [i.id, i]));

    return runs.map((run) => ({
      ...run,
      itemObjects: run.items.map((id) => itemsMap.get(id)).filter(Boolean),
    }));
  }

  async findOne(id: number) {
    const run = await this.prisma.run.findUnique({
      where: { id },
      include: {
        user: true,
        character: true,
      },
    });

    if (!run) return null;

    const itemsData = await this.prisma.item.findMany({
      where: { id: { in: run.items } },
    });
    const itemsMap = new Map(itemsData.map((i) => [i.id, i]));

    return {
      ...run,
      itemObjects: run.items
        .map((itemId) => itemsMap.get(itemId))
        .filter(Boolean),
    };
  }

  update(id: number, updateRunDto: UpdateRunDto) {
    return this.prisma.run.update({
      where: { id },
      data: updateRunDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} run`;
  }
}
