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
    @Req() req: Request & { user: { sub: number } },
    @Body() createRunDto: CreateRunDto,
  ) {
    return this.runsService.create(req.user.sub, createRunDto);
  }

  @Get()
  findAll() {
    return this.runsService.findAll();
  }

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
