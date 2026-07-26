import challengesData from '../../public/data/challenges.json';

export function getChallengeName(id: number | string | null | undefined): string | null {
  if (id === null || id === undefined || id === "" || id === false) return null;

  const numId = typeof id === "number" ? id : parseInt(String(id), 10);
  if (isNaN(numId) || numId === 0) return null;

  // Cast the JSON to a Record mapping stringified IDs to string names
  const challenges = challengesData as Record<string, string>;

  return challenges[numId.toString()] || `Custom Challenge (#${numId})`;
}
