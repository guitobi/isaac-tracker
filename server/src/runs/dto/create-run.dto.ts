export class CreateRunDto {
  seed?: string;
  isVictory!: boolean;
  duration!: number;
  characterId!: number;
  finalBoss?: string;
  deathStage?: string;
  causeOfDeath?: string;
  challengeId?: number;
  challengeName?: string;
}
