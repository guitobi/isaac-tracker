import bossesData from '../../public/data/bosses.json';

const bossNameToIdMap: Record<string, string> = {};

for (const [id, name] of Object.entries(bossesData)) {
  bossNameToIdMap[name.toLowerCase()] = id;
}

export function getBossImageUrl(bossName: string): string | null {
  const bossId = bossNameToIdMap[bossName.trim().toLowerCase()];
  if (bossId) {
    return `/bosses/${bossId}.png`;
  }
  return null;
}
