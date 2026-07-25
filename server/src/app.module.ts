import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { CharactersModule } from './characters/characters.module';
import { RunsModule } from './runs/runs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CharactersModule, RunsModule, AuthModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
