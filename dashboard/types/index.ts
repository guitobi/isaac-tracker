export interface ItemInfo {
  id: number;
  name: string;
  description: string;
  image: string;
  quality?: number;
}

export interface CharacterInfo {
  id: number;
  name: string;
  isTainted?: boolean;
}

export interface UserInfo {
  id: number;
  username: string;
}

export interface Run {
  id: number;
  seed: string;
  isVictory: boolean;
  duration: number;
  items: number[];
  characterId: number;
  character?: CharacterInfo;
  user?: UserInfo;
  itemObjects: ItemInfo[];
  trinkets: number[];
  trinketObjects?: ItemInfo[];
  bosses?: string[];
  finalBoss?: string;
  deathStage?: string;
  causeOfDeath?: string;
  challengeId?: number;
}
