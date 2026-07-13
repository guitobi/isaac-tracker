import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { CharactersModule } from './characters/characters.module';
import { RunsModule } from './runs/runs.module';
import { LogReaderService } from './log-reader/log-reader.service';

@Module({
  imports: [PrismaModule, CharactersModule, RunsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, LogReaderService],
})
export class AppModule {}
