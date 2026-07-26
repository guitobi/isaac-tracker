import { Run } from "../types";
import Link from "next/link";
import { getBuildRank, isQuality4Item } from "../app/lib/items";
import { getChallengeName } from "../app/lib/challenges";

interface RunCardProps {
  run: Run;
}

export function RunCard({ run }: RunCardProps) {
  const durationMin = Math.floor((run.duration || 0) / 60);
  const durationSec = (run.duration || 0) % 60;

  const itemsCount = new Set(
    run.items || run.itemObjects?.map((i) => i.id) || [],
  ).size;
  const trinketsCount = new Set(
    run.trinkets || run.trinketObjects?.map((t) => t.id) || [],
  ).size;
  const bossesCount = new Set(run.bosses || []).size;

  const charName = run.character?.name || `Character #${run.characterId}`;
  const isTainted = run.character?.isTainted;
  const challengeName = getChallengeName(run.challengeId);
  const buildRankInfo = getBuildRank(
    run.itemObjects,
    run.isVictory,
    run.finalBoss,
    run.duration,
  );

  return (
    <Link href={`/runs/${run.id}`} className="block h-full">
      <div className="isaac-card p-5 transition-transform hover:-translate-y-1 hover:rotate-1 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3 border-b-4 border-black pb-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                {challengeName ? (
                  <h3 className="font-hand font-bold text-3xl text-black">
                    Challenge #{run.challengeId}
                  </h3>
                ) : (
                  <h3 className="font-hand font-bold text-3xl text-black">
                    {charName}
                  </h3>
                )}
                {challengeName && (
                  <span className="px-1.5 py-0.5 text-xs font-pixel font-bold bg-[#8b0000] text-white border-2 border-black">
                    🎯 {challengeName.toUpperCase()}
                  </span>
                )}
                {isTainted && (
                  <span className="px-1.5 py-0.5 text-xs font-pixel font-bold bg-purple-900 text-white border-2 border-black">
                    TAINTED
                  </span>
                )}
                <span className={`px-2 py-0.5 text-xs font-pixel font-bold border-2 rounded ${buildRankInfo.style}`}>
                  {buildRankInfo.rank}
                </span>
              </div>
              {challengeName && (
                <p className="font-pixel text-xs font-bold text-black/80 mt-1">
                  Character: {charName}
                </p>
              )}
              {run.user?.username && (
                <p className="font-pixel text-xs font-bold text-black/80 mt-1">
                  Player: {run.user.username}
                </p>
              )}
              <p className="font-pixel text-sm font-bold text-black mt-1">
                SEED: {run.seed}
              </p>
              {run.isVictory && run.finalBoss && (
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-[#c39832]/20 border-2 border-[#c39832] rounded text-xs font-pixel font-bold text-[#4a3800]">
                  <span>🏆</span>
                  <span>Defeated: {run.finalBoss}</span>
                </div>
              )}
              {!run.isVictory && (run.deathStage || run.causeOfDeath) && (
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-[#8b0000]/10 border-2 border-[#8b0000] rounded text-xs font-pixel font-bold text-[#8b0000]">
                  <span>☠️</span>
                  <span>
                    {run.causeOfDeath
                      ? `Killed by ${run.causeOfDeath} on ${run.deathStage || "Unknown"}`
                      : `Died on: ${run.deathStage}`}
                  </span>
                </div>
              )}
              {run.itemObjects && run.itemObjects.some((i) => isQuality4Item(i.id, i.quality)) && (
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-[#c39832] text-black border-2 border-black font-pixel text-xs font-bold shadow-[2px_2px_0_rgba(0,0,0,1)]">
                  <span>⭐</span>
                  <span>Q4 ITEMS: {run.itemObjects.filter((i) => isQuality4Item(i.id, i.quality)).length}</span>
                </div>
              )}
            </div>
            <span
              className={`px-2.5 py-1 text-xl font-bold border-4 border-black shrink-0 ${
                run.isVictory
                  ? "bg-isaac-gold text-black"
                  : "bg-isaac-blood text-white"
              }`}
            >
              {run.isVictory ? "VICTORY" : "DEATH"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="border-2 border-black p-2 bg-black/10 text-center">
              <p className="font-hand text-xl font-bold text-black">Time</p>
              <p className="font-pixel text-lg font-bold text-black">
                {durationMin}m {durationSec}s
              </p>
            </div>
            <div className="border-2 border-black p-2 bg-black/10 text-center">
              <p className="font-hand text-xl font-bold text-black">Items</p>
              <p className="font-pixel text-lg font-bold text-black">
                {itemsCount}
              </p>
            </div>
            <div className="border-2 border-black p-2 bg-black/10 text-center">
              <p className="font-hand text-xl font-bold text-black">Trinkets</p>
              <p className="font-pixel text-lg font-bold text-black">
                {trinketsCount}
              </p>
            </div>
            <div className="border-2 border-black p-2 bg-black/10 text-center">
              <p className="font-hand text-xl font-bold text-black">Bosses</p>
              <p className="font-pixel text-lg font-bold text-black">
                {bossesCount}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t-2 border-black/20 flex justify-between items-center text-xs font-pixel text-black font-bold">
          <span>Run #{run.id}</span>
          <span className="text-isaac-blood font-bold group-hover:underline">
            Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
