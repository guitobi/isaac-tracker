import { Injectable, OnModuleInit } from '@nestjs/common';
import { RunsService } from 'src/runs/runs.service';
import { Tail } from 'tail';

@Injectable()
export class LogReaderService implements OnModuleInit {
  private currentSeed: string | null = null;
  currentRunId: number | null = null;
  currentRunStartTime: number | null = null;
  characterMap: Record<number, number> = {
    0: 1, // Variant 0 -> Character ID 1 (Isaac)
    1: 2, // Variant 1 -> Character ID 2 (Magdalene)
    2: 3, // Variant 2 -> Character ID 3 (Cain)
    3: 4, // Variant 3 -> Character ID 4 (Judas)
  };

  constructor(private readonly runsService: RunsService) {}

  onModuleInit() {
    const logPath =
      'C:/Users/Administrator/Documents/My Games/Binding of Isaac Repentance+/log.txt';
    const tail = new Tail(logPath, { useWatchFile: true });

    tail.on('line', (data: string) => {
      console.log('Новий рядок з гри:', data);

      const seedRegex = /RNG Start Seed: ([A-Z0-9]{4} [A-Z0-9]{4})/;
      const playerRegex =
        /Initialized player with Variant (\d+) and Subtype (\d+)/;
      const deathRegex = /Game Over/i;

      const seedData = data.match(seedRegex);
      const playerData = data.match(playerRegex);
      const deathData = data.match(deathRegex);

      if (deathData) {
        if (!this.currentRunId || !this.currentRunStartTime) {
          console.log('Game over was found, but run is not valid. Ignored');
          return;
        }

        const totalTime = Math.floor(
          Date.now() - this.currentRunStartTime / 1000,
        );

        this.runsService
          .update(this.currentRunId, {
            isVictory: false,
            duration: totalTime,
          })
          .then(() => {
            this.currentRunId = null;
            this.currentRunStartTime = null;
          })
          .catch((error) => {
            console.error(error);
          });
      }

      if (seedData) {
        console.log(`Seed found: ${seedData[1]}`);
        this.currentSeed = seedData[1];
      }

      if (playerData) {
        const variant = Number(playerData[1]);
        console.log(`Character found: ${variant}`);

        if (this.currentSeed) {
          const characterId = this.characterMap[variant];
          this.runsService
            .create({
              seed: this.currentSeed,
              characterId: characterId,
              userId: 1,
              isVictory: false,
              duration: 0,
            })
            .then((run) => {
              this.currentSeed = null;
              this.currentRunId = run.id;
              this.currentRunStartTime = Date.now();
              console.log('🎮 Забіг успішно збережено в БД!');
            })
            .catch((error) => {
              console.error('Помилка при створенні забігу:', error);
            });
        }
      }
    });

    tail.on('error', (error) => {
      console.error('Помилка читання логу:', error);
    });
  }
}
