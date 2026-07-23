import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RunsService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: number, createRunDto: CreateRunDto) {
    if (!userId) {
      throw new BadRequestException('User ID is missing in request context');
    }
    return this.prisma.run.create({
      data: {
        items: [],
        trinkets: [],
        bosses: [],
        ...createRunDto,
        userId: userId,
      },
    });
  }

  async findAll() {
    const runs = await this.prisma.run.findMany({
      where: {
        OR: [
          { items: { isEmpty: false } },
          { trinkets: { isEmpty: false } },
          { isVictory: true },
        ],
      },
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

    const allTrinketIds = [...new Set(runs.flatMap((r) => r.trinkets))];
    const trinketsData = await this.prisma.trinket.findMany({
      where: { id: { in: allTrinketIds } },
    });
    const trinketsMap = new Map(trinketsData.map((t) => [t.id, t]));

    return runs.map((run) => ({
      ...run,
      itemObjects: run.items.map((id) => itemsMap.get(id)).filter(Boolean),
      trinketObjects: run.trinkets.map((id) => trinketsMap.get(id)).filter(Boolean),
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

    const trinketsData = await this.prisma.trinket.findMany({
      where: { id: { in: run.trinkets } },
    });
    const trinketsMap = new Map(trinketsData.map((t) => [t.id, t]));

    return {
      ...run,
      itemObjects: run.items
        .map((itemId) => itemsMap.get(itemId))
        .filter(Boolean),
      trinketObjects: run.trinkets
        .map((trinketId) => trinketsMap.get(trinketId))
        .filter(Boolean),
    };
  }

  async update(id: number, updateRunDto: UpdateRunDto) {
    const items = updateRunDto.items ?? [];
    const trinkets = updateRunDto.trinkets ?? [];
    const isVictory = updateRunDto.isVictory ?? false;

    // Discard run if ended without picking up any items or trinkets
    if (items.length === 0 && trinkets.length === 0 && !isVictory) {
      try {
        await this.prisma.run.delete({ where: { id } });
        return { message: 'Discarded empty run without items', deleted: true };
      } catch {
        return { message: 'Run already discarded' };
      }
    }

    return this.prisma.run.update({
      where: { id },
      data: updateRunDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} run`;
  }
}
