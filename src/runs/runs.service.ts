import { Injectable } from '@nestjs/common';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RunsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRunDto: CreateRunDto) {
    return this.prisma.run.create({ data: createRunDto });
  }

  findAll() {
    return this.prisma.run.findMany({
      include: {
        user: true,
        character: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} run`;
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
