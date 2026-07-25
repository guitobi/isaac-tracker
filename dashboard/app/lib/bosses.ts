import bossesData from '../../public/data/bosses.json';

const bossNameToIdMap: Record<string, string> = {
  "the gate": "53",
  "gate": "53",
  "mega satan": "55",
};
const allBossNames: { id: string; norm: string; cleanNorm: string }[] = [];

for (const [id, name] of Object.entries(bossesData)) {
  const norm = name.trim().toLowerCase();
  const cleanNorm = norm.replace(/^the\s+/, '');
  bossNameToIdMap[norm] = id;
  bossNameToIdMap[cleanNorm] = id;
  allBossNames.push({ id, norm, cleanNorm });
}

export function formatBossName(raw: string): string {
  if (!raw) return "";
  let name = raw.trim();
  name = name.replace(/\s*\([^)]*\)?/gi, '');
  name = name.replace(/\s+copy.*$/gi, '');
  return name.trim();
}

function cleanBossName(raw: string): string {
  let name = raw.trim().toLowerCase();
  // Remove parenthetical noise like (copy), (copy 1), etc.
  name = name.replace(/\s*\([^)]*\)?/g, '');
  // Remove trailing "copy" if unmatched parenthesis
  name = name.replace(/\s+copy.*$/gi, '');
  // Remove leading "the "
  name = name.replace(/^the\s+/, '');
  // Remove trailing numbers if space separated
  name = name.replace(/\s+\d+$/g, '').trim();

  // If string is repeated like "pinpin" or "monstromonstro"
  if (name.length > 2 && name.length % 2 === 0) {
    const halfLen = Math.floor(name.length / 2);
    const firstHalf = name.slice(0, halfLen);
    const secondHalf = name.slice(halfLen);
    if (firstHalf === secondHalf) {
      name = firstHalf;
    }
  }

  return name;
}

export function getBossImageUrl(bossName: string): string {
  if (!bossName) return "/bosses/1.png";

  const cleaned = cleanBossName(bossName);
  
  // 1. Direct match in map
  if (bossNameToIdMap[cleaned]) {
    return `/bosses/${bossNameToIdMap[cleaned]}.png`;
  }
  
  // 2. Check exact matches in normalized list
  for (const item of allBossNames) {
    if (item.cleanNorm === cleaned || item.norm === cleaned) {
      return `/bosses/${item.id}.png`;
    }
  }

  // 3. Substring match
  for (const item of allBossNames) {
    if (cleaned.length >= 3 && (item.cleanNorm.includes(cleaned) || cleaned.includes(item.cleanNorm))) {
      return `/bosses/${item.id}.png`;
    }
  }

  // Guaranteed fallback so an image is ALWAYS present
  return "/bosses/1.png";
}
