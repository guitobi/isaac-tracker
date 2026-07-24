import { Run, ItemInfo, CharacterInfo } from "../../types";

export interface DashboardStats {
  totalRuns: number;
  victories: number;
  deaths: number;
  winRate: number;
  winStreak: number;
  avgDurationSec: number;
  topWinningItems: { item: ItemInfo; count: number }[];
}

export interface CharacterStats {
  characterId: number;
  character?: CharacterInfo;
  totalRuns: number;
  victories: number;
  deaths: number;
  winRate: number;
  winStreak: number;
}

export function calculateDashboardStats(runs: Run[]): DashboardStats {
  if (!runs || runs.length === 0) {
    return {
      totalRuns: 0,
      victories: 0,
      deaths: 0,
      winRate: 0,
      winStreak: 0,
      avgDurationSec: 0,
      topWinningItems: [],
    };
  }

  const totalRuns = runs.length;
  const victories = runs.filter((r) => r.isVictory).length;
  const deaths = totalRuns - victories;
  const winRate = Math.round((victories / totalRuns) * 100);

  // Win streak: consecutive victories starting from most recent run (runs are ordered newest first)
  let winStreak = 0;
  for (const run of runs) {
    if (run.isVictory) {
      winStreak++;
    } else {
      break;
    }
  }

  const totalDuration = runs.reduce((acc, r) => acc + (r.duration || 0), 0);
  const avgDurationSec = Math.round(totalDuration / totalRuns);

  // Top winning items frequency
  const itemCounts = new Map<number, { item: ItemInfo; count: number }>();

  for (const run of runs) {
    if (!run.isVictory || !run.itemObjects) continue;

    // Deduplicate items per run
    const uniqueItemsInRun = Array.from(
      new Map(run.itemObjects.map((i) => [i.id, i])).values(),
    );

    for (const item of uniqueItemsInRun) {
      const existing = itemCounts.get(item.id);
      if (existing) {
        existing.count++;
      } else {
        itemCounts.set(item.id, { item, count: 1 });
      }
    }
  }

  const topWinningItems = Array.from(itemCounts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    totalRuns,
    victories,
    deaths,
    winRate,
    winStreak,
    avgDurationSec,
    topWinningItems,
  };
}

export const calculateCharacterStats = (runs: Run[]): CharacterStats[] => {
  const grouped = new Map<number, Run[]>();
  const result: CharacterStats[] = [];

  for (const run of runs) {
    if (!grouped.has(run.characterId)) {
      grouped.set(run.characterId, []);
    }
    const characterRun = grouped.get(run.characterId);
    characterRun?.push(run);
  }

  for (const [characterId, charRuns] of grouped.entries()) {
    const totalRuns = charRuns.length;
    const victories = charRuns.filter((run) => run.isVictory).length;
    const deaths = totalRuns - victories;
    const winRate =
      totalRuns > 0 ? Math.round((victories / totalRuns) * 100) : 0;

    let winStreak = 0;
    for (const run of charRuns) {
      if (run.isVictory) winStreak++;
      if (!run.isVictory) break;
    }

    const character = charRuns[0]?.character;

    const characterStats = {
      totalRuns,
      victories,
      deaths,
      winRate,
      winStreak,
      characterId,
      character,
    };

    result.push(characterStats);
  }

  return result.sort((a, b) => b.totalRuns - a.totalRuns);
};
