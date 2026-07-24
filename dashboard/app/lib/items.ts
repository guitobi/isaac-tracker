export function formatItemName(id: number, text: string): string {
  return text || `Item #${id}`;
}

export function getItemDescription(id: number, rawDescription: string): string {
  return rawDescription || "Collectible item";
}

export { getItemQuality, isQuality4Item } from './item_qualities';

