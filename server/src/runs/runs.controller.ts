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

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() req: Request & { user: { sub: number } }) {
    return this.runsService.findAll(req.user.sub);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Req() req: Request & { user: { sub: number } }
  ) {
    return this.runsService.findOne(+id, req.user.sub);
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
