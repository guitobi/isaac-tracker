export interface ItemInfo {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Run {
  id: number;
  seed: string;
  isVictory: boolean;
  duration: number;
  items: number[];
  characterId: number;
  itemObjects: ItemInfo[];
  trinkets: number[];
}
