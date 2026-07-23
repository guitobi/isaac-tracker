import bossesData from '../../public/data/bosses.json';

const bossNameToIdMap: Record<string, string> = {};

for (const [id, name] of Object.entries(bossesData)) {
  const norm = name.trim().toLowerCase();
  bossNameToIdMap[norm] = id;
  // Also index without leading "the "
  if (norm.startsWith('the ')) {
    bossNameToIdMap[norm.replace(/^the\s+/, '')] = id;
  }
}

export function getBossImageUrl(bossName: string): string | null {
  const norm = bossName.trim().toLowerCase();
  
  // 1. Direct match
  if (bossNameToIdMap[norm]) {
    return `/bosses/${bossNameToIdMap[norm]}.png`;
  }
  
  // 2. Try removing leading "the "
  const withoutThe = norm.replace(/^the\s+/, '');
  if (bossNameToIdMap[withoutThe]) {
    return `/bosses/${bossNameToIdMap[withoutThe]}.png`;
  }
  
  // 3. Try adding leading "the "
  const withThe = `the ${norm}`;
  if (bossNameToIdMap[withThe]) {
    return `/bosses/${bossNameToIdMap[withThe]}.png`;
  }
  
  return null;
}
