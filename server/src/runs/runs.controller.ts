import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { RunsService } from './runs.service';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Req() req: Request & { user: { userId?: number; sub?: number } },
    @Body() createRunDto: CreateRunDto,
  ) {
    const userId = req.user.userId ?? req.user.sub!;
    return this.runsService.create(userId, createRunDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() req: Request & { user: { sub?: number; userId?: number } }) {
    const userId = req.user.userId ?? req.user.sub!;
    return this.runsService.findAll(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runsService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunDto: UpdateRunDto) {
    return this.runsService.update(+id, updateRunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runsService.remove(+id);
  }
}
