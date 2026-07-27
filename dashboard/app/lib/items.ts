import { ItemInfo } from '../../types';
import { getItemQuality } from './item_qualities';

export function formatItemName(id: number, text: string): string {
  return text || `Item #${id}`;
}

export function getItemDescription(id: number, rawDescription: string): string {
  return rawDescription || "Collectible item";
}

export function getBuildRank(
  items?: ItemInfo[],
  isVictory?: boolean,
  finalBoss?: string,
  duration?: number,
) {
  if (!items || items.length === 0) {
    return {
      rank: "C TIER 🛡️",
      style: "bg-gray-800 text-gray-200 border-gray-600",
      score: 0,
    };
  }

  const uniqueItems = Array.from(new Map(items.map((item) => [item.id, item])).values());
  
  // 1. Base Item Power & Quality 0 penalties
  let q4Count = 0;
  const baseScore = uniqueItems.reduce((sum, item) => {
    const q = getItemQuality(item.id, item.quality);
    if (q === 4) {
      q4Count++;
      return sum + 6;
    }
    if (q === 3) return sum + 3;
    if (q === 2) return sum + 1;
    if (q === 1) return sum + 0.5;
    if (q === 0) return sum - 1.5;
    return sum + 1;
  }, 0);

  // 2. Synergy Bonus (+4 per extra Q4 item beyond the 1st)
  let synergyBonus = 0;
  if (q4Count > 1) {
    synergyBonus += (q4Count - 1) * 4;
  }
  if (uniqueItems.length > 15) {
    synergyBonus += (uniqueItems.length - 15) * 0.5;
  }

  // 3. Boss Achievement Bonus
  let bossBonus = 0;
  if (finalBoss) {
    const normBoss = finalBoss.toLowerCase();
    if (normBoss.includes("beast") || normBoss.includes("mother") || normBoss.includes("delirium") || normBoss.includes("mega satan")) {
      bossBonus += 8;
    } else if (normBoss.includes("hush") || normBoss.includes("ultra greedier") || normBoss.includes("lamb") || normBoss.includes("???") || normBoss.includes("blue baby")) {
      bossBonus += 5;
    } else if (normBoss.includes("isaac") || normBoss.includes("satan") || normBoss.includes("heart") || normBoss.includes("lives")) {
      bossBonus += 2;
    }
  }

  // 4. Time Efficiency Bonus
  let timeBonus = 0;
  if (duration && duration > 0) {
    const minutes = duration / 60;
    if (minutes <= 20) {
      timeBonus += 4;
    } else if (minutes <= 30) {
      timeBonus += 2;
    } else if (minutes >= 50) {
      timeBonus -= 2;
    }
  }

  // 5. Outcome Multiplier
  let rawScore = baseScore + synergyBonus + bossBonus + timeBonus;
  if (isVictory) {
    rawScore *= 1.2;
  } else {
    rawScore *= 0.7;
  }

  const finalScore = Math.max(0, Math.round(rawScore));

  // Determine Rank
  if (finalScore >= 32 && isVictory && q4Count >= 1) {
    return {
      rank: "S+ TIER 👑",
      style: "bg-[#c39832] text-black border-black shadow-[0_0_8px_rgba(195,152,50,0.8)]",
      score: finalScore,
    };
  } else if (finalScore >= 24) {
    return {
      rank: "S TIER 💎",
      style: "bg-purple-900 text-purple-100 border-purple-400",
      score: finalScore,
    };
  } else if (finalScore >= 16) {
    return {
      rank: "A TIER ⚔️",
      style: "bg-blue-900 text-blue-100 border-blue-400",
      score: finalScore,
    };
  } else if (finalScore >= 9) {
    return {
      rank: "B TIER 📜",
      style: "bg-amber-900 text-amber-100 border-amber-500",
      score: finalScore,
    };
  }

  return {
    rank: "C TIER 🛡️",
    style: "bg-gray-800 text-gray-200 border-gray-600",
    score: finalScore,
  };
}

export { getItemQuality, isQuality4Item } from './item_qualities';
