"use client";

import Image from "next/image";

import { useParams, useRouter } from "next/navigation";
import { ItemIcon } from "../../../components/ItemIcon";
import { useRun } from "../../../hooks/useRuns";
import { getBossImageUrl, formatBossName } from "../../lib/bosses";
import { formatItemName, getBuildRank, getItemQuality } from "../../lib/items";
import { getChallengeName } from "../../lib/challenges";
import { useState } from "react";

export default function RunDetailsPage() {
  const [isTimeline, setIsTimeline] = useState(false);
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data: run, isLoading, error } = useRun(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="animate-pulse text-2xl font-display">
          Loading run data...
        </p>
      </div>
    );
  }

  if (error || !run) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading run details: {error?.message || "Run not found"}
      </div>
    );
  }

  const uniqueItemObjects = run?.itemObjects
    ? Array.from(
        new Map(run.itemObjects.map((item) => [item.id, item])).values(),
      )
    : [];

  const uniqueTrinketObjects = run?.trinketObjects
    ? Array.from(
        new Map(
          run.trinketObjects.map((trinket) => [trinket.id, trinket]),
        ).values(),
      )
    : [];

  const uniqueBosses = run?.bosses ? Array.from(new Set(run.bosses)) : [];

  // Group items by Quality (0..4) using official dictionary lookup helper
  const q4Items = uniqueItemObjects.filter(
    (i) => getItemQuality(i.id, i.quality) === 4,
  );
  const q3Items = uniqueItemObjects.filter(
    (i) => getItemQuality(i.id, i.quality) === 3,
  );
  const q12Items = uniqueItemObjects.filter((i) => {
    const q = getItemQuality(i.id, i.quality);
    return q === 1 || q === 2;
  });
  const q0Items = uniqueItemObjects.filter(
    (i) => getItemQuality(i.id, i.quality) === 0,
  );

  const challengeName = getChallengeName(run?.challengeId);
  const buildRankInfo = getBuildRank(
    uniqueItemObjects,
    run?.isVictory,
    run?.finalBoss,
    run?.duration,
  );
  const totalBuildScore = buildRankInfo.score;
  const buildRank = buildRankInfo.rank;
  const buildRankStyle = buildRankInfo.style;

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto flex flex-col gap-6">
      <button
        onClick={() => router.push("/")}
        className="self-start px-4 py-2 bg-black hover:bg-isaac-dark text-white border-4 border-white font-pixel text-xl shadow-[4px_4px_0_rgba(0,0,0,1)] transition-colors"
      >
        {"< BACK TO BASEMENT"}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (4/12) — General Info & Bosses */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Run Card */}
          <header className="isaac-card p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start border-b-4 border-black pb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  {challengeName ? (
                    <h1 className="font-pixel text-2xl font-extrabold text-black">
                      Challenge #{run.challengeId}
                    </h1>
                  ) : (
                    <h1 className="font-pixel text-2xl font-extrabold text-black">
                      {run.character?.name || `Character #${run.characterId}`}
                    </h1>
                  )}
                  {challengeName && (
                    <span className="px-2 py-0.5 text-xs font-pixel font-bold bg-[#8b0000] text-white border-2 border-black">
                      🎯 {challengeName.toUpperCase()}
                    </span>
                  )}
                  {run.character?.isTainted && (
                    <span className="px-1.5 py-0.5 text-xs font-pixel font-bold bg-purple-900 text-purple-200 border border-black">
                      TAINTED
                    </span>
                  )}
                </div>
                {challengeName && (
                  <p className="font-pixel text-sm text-gray-700 mt-1">
                    Character:{" "}
                    {run.character?.name || `Character #${run.characterId}`}
                  </p>
                )}
                {run.user?.username && (
                  <p className="font-pixel text-sm text-gray-700 mt-1">
                    Player: {run.user.username}
                  </p>
                )}
              </div>
              <span
                className={`px-3 py-1 text-xl font-bold border-4 border-black shadow-[2px_2px_0_rgba(0,0,0,0.5)] shrink-0 ${run.isVictory ? "bg-[#c39832] text-black" : "bg-[#8b0000] text-white"}`}
              >
                {run.isVictory ? "VICTORY" : "DEATH"}
              </span>
            </div>

            <div className="flex flex-col gap-3 font-pixel text-base">
              {challengeName && (
                <div className="flex justify-between border-b border-black/10 pb-1.5">
                  <span className="text-gray-700">CHALLENGE:</span>
                  <span className="font-bold text-[#8b0000]">
                    #{run.challengeId} - {challengeName}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-gray-700">SEED:</span>
                <span className="font-bold text-black">{run.seed}</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-gray-700">TIME:</span>
                <span className="font-bold text-black">
                  {Math.floor(run.duration / 60)}m {run.duration % 60}s
                </span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-gray-700">BUILD SCORE:</span>
                <span className="font-bold text-[#c39832] text-lg">
                  {totalBuildScore} pts
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-700">RANK:</span>
                <span
                  className={`px-2.5 py-1 text-sm font-pixel font-bold border-2 rounded ${buildRankStyle}`}
                >
                  {buildRank}
                </span>
              </div>
            </div>

            {run.isVictory && (
              <div className="mt-2 flex items-center gap-2 p-3 bg-[#c39832]/20 border-2 border-[#c39832] rounded text-sm font-pixel font-bold text-[#4a3800]">
                <span>🏆</span>
                <span>DEFEATED: {run.finalBoss || "Completed"}</span>
              </div>
            )}
            {!run.isVictory && (run.deathStage || run.causeOfDeath) && (
              <div className="mt-2 flex items-center gap-2 p-3 bg-[#8b0000]/20 border-2 border-[#8b0000] rounded text-sm font-pixel font-bold text-[#8b0000]">
                <span>☠️</span>
                <span>
                  {run.causeOfDeath
                    ? `KILLED BY ${run.causeOfDeath.toUpperCase()} ON ${run.deathStage?.toUpperCase() || "UNKNOWN"}`
                    : `DIED ON: ${run.deathStage?.toUpperCase()}`}
                </span>
              </div>
            )}
          </header>

          {/* Horizontal Stage Roadmap Boss Progression */}
          <section className="isaac-card p-6 col-span-full">
            <h2 className="font-pixel text-2xl font-bold mb-4 border-b-4 border-black pb-2 flex justify-between items-center">
              <span>Bosses</span>
              <span className="font-pixel text-base text-gray-700">
                Defeated: {uniqueBosses.length}
              </span>
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-4 pt-2 items-center snap-x">
              {uniqueBosses.length > 0 ? (
                uniqueBosses.map((boss, index) => {
                  const imageUrl = getBossImageUrl(boss);
                  const isFinal = run.finalBoss === boss;
                  return (
                    <div
                      key={`roadmap-boss-${index}`}
                      className="flex items-center gap-4 shrink-0 snap-start"
                    >
                      <div
                        className={`flex flex-col items-center border-4 p-4 rounded-xl shadow-lg transition-all w-56 ${
                          isFinal
                            ? "border-[#c39832] bg-[#c39832]/20 shadow-[0_0_20px_rgba(195,152,50,0.6)] scale-105"
                            : "border-black/30 bg-black/5"
                        }`}
                      >
                        <span className="font-pixel text-xs text-gray-700 font-bold mb-2">
                          STAGE #{index + 1}
                        </span>

                        <div className="w-36 h-36 flex items-center justify-center bg-black/10 border-2 border-black/20 rounded-lg p-2 shadow-inner mb-3">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={boss}
                              width={144}
                              height={144}
                              className="w-full h-full object-contain drop-shadow-xl"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                  "none";
                              }}
                            />
                          ) : (
                            <div className="font-pixel text-6xl">👹</div>
                          )}
                        </div>

                        <span className="font-pixel text-base font-extrabold text-black text-center truncate w-full leading-tight">
                          {formatBossName(boss)}
                        </span>

                        {isFinal && (
                          <span className="mt-2 px-2.5 py-1 text-xs font-pixel font-bold bg-[#c39832] text-black border-2 border-black rounded shadow-[2px_2px_0_rgba(0,0,0,1)]">
                            🏆 FINAL BOSS
                          </span>
                        )}
                      </div>

                      {index < uniqueBosses.length - 1 && (
                        <div className="text-3xl font-bold text-black/40 px-1 select-none">
                          ➔
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="w-full text-center py-6 font-pixel text-lg text-gray-700">
                  No bosses defeated.
                </div>
              )}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (8/12) — Inventory & Item Tiers */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex gap-2 px-6 mt-6 relative z-10 -mb-[4px]">
            <button
              onClick={() => setIsTimeline(false)}
              className={`font-pixel text-xl font-bold px-6 py-3 border-4 border-black transition-none ${
                !isTimeline 
                  ? "bg-[#e3d2b8] text-black border-b-0 pt-4 z-20" 
                  : "bg-[#a6967c] text-black/60 hover:bg-[#bba88d] hover:text-black mt-2 z-0 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]"
              }`}
            >
              ITEMS SHOWCASE
            </button>
            <button
              onClick={() => setIsTimeline(true)}
              className={`font-pixel text-xl font-bold px-6 py-3 border-4 border-black transition-none ${
                isTimeline 
                  ? "bg-[#e3d2b8] text-black border-b-0 pt-4 z-20" 
                  : "bg-[#a6967c] text-black/60 hover:bg-[#bba88d] hover:text-black mt-2 z-0 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]"
              }`}
            >
              RUN TIMELINE
            </button>
          </div>

          {isTimeline && (
            <section className="isaac-card p-8">
              <h2 className="font-pixel text-2xl font-bold mb-8 border-b-4 border-black pb-2">Run Timeline</h2>
              <div className="flex flex-col gap-8 border-l-4 border-black ml-4 pl-8 py-2 relative">
                {run.timeline && run.timeline.length > 0 ? (
                  run.timeline.map((event, i) => {
                    const mins = Math.floor(event.timestamp / 60);
                    const secs = (event.timestamp % 60).toString().padStart(2, '0');
                    const timeStr = `${mins}m ${secs}s`;
                    
                    if (event.event_type === "STAGE") {
                      return (
                        <div key={i} className="relative flex flex-col">
                          <div className="absolute -left-[43px] w-6 h-6 bg-blue-500 border-4 border-black rounded-full" />
                          <span className="font-pixel text-xs text-gray-500 font-bold mb-1">{timeStr}</span>
                          <span className="font-pixel text-lg font-extrabold text-blue-900 bg-blue-100 self-start px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
                            FLOOR: {event.data.toUpperCase()}
                          </span>
                        </div>
                      );
                    }
                    if (event.event_type === "BOSS") {
                      const imageUrl = getBossImageUrl(event.data);
                      return (
                        <div key={i} className="relative flex flex-col">
                          <div className="absolute -left-[43px] w-6 h-6 bg-red-600 border-4 border-black rounded-full" />
                          <span className="font-pixel text-xs text-gray-500 font-bold mb-1">{timeStr}</span>
                          <div className="flex items-center gap-3 bg-red-100 border-2 border-red-900 p-2 self-start rounded shadow-[2px_2px_0_rgba(0,0,0,1)]">
                            {imageUrl && <Image src={imageUrl} alt={event.data} width={40} height={40} className="object-contain drop-shadow-md" />}
                            <span className="font-pixel text-base font-bold text-red-900">DEFEATED: {formatBossName(event.data)}</span>
                          </div>
                        </div>
                      );
                    }
                    if (event.event_type === "ITEM") {
                      const itemId = parseInt(event.data, 10);
                      const itemObj = uniqueItemObjects.find(i => i.id === itemId);
                      if (!itemObj) return null;
                      return (
                        <div key={i} className="relative flex flex-col">
                          <div className="absolute -left-[43px] w-6 h-6 bg-green-500 border-4 border-black rounded-full" />
                          <span className="font-pixel text-xs text-gray-500 font-bold mb-1">{timeStr}</span>
                          <div className="flex items-center gap-3 bg-green-50 border-2 border-black p-2 self-start shadow-[2px_2px_0_rgba(0,0,0,1)]">
                            <ItemIcon item={itemObj} />
                            <span className="font-pixel text-sm font-bold text-black">{formatItemName(itemObj.id, itemObj.name)}</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <span className="font-pixel text-lg text-gray-500 font-bold">No timeline events recorded for this run.</span>
                )}
              </div>
            </section>
          )}

          {!isTimeline && (
            <>
              {/* Collected Items by Quality Category */}
          <section className="isaac-card p-6 flex flex-col gap-6">
            <h2 className="font-pixel text-2xl font-bold border-b-4 border-black pb-2 flex justify-between items-center">
              <span>Items Collected</span>
              <span className="font-pixel text-xl text-gray-700">
                Total: {uniqueItemObjects.length}
              </span>
            </h2>

            {/* Quality 4 Section */}
            {q4Items.length > 0 && (
              <div className="border-2 border-[#c39832] bg-[#c39832]/10 p-4 rounded-lg shadow-[0_0_12px_rgba(195,152,50,0.3)]">
                <h3 className="font-pixel text-sm font-bold text-[#4a3800] mb-3 flex items-center gap-2">
                  <span>⭐</span>
                  <span>QUALITY 4 — LEGENDARY ITEMS ({q4Items.length})</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                  {q4Items.map((item, index) => (
                    <div
                      key={`q4-${item.id}-${index}`}
                      className="flex flex-col items-center border-2 border-[#c39832] p-2.5 bg-[#c39832]/10 rounded-lg w-full relative hover:z-40 shadow-md"
                    >
                      <ItemIcon item={item} />
                      <span className="font-pixel text-[11px] mt-1.5 text-center font-bold text-[#4a3800] leading-tight w-full break-words line-clamp-2">
                        {formatItemName(item.id, item.name)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quality 3 Section */}
            {q3Items.length > 0 && (
              <div className="border-2 border-purple-800/40 bg-purple-900/10 p-4 rounded-lg">
                <h3 className="font-pixel text-sm font-bold text-purple-950 mb-3 flex items-center gap-2">
                  <span>✨</span>
                  <span>QUALITY 3 — HIGH TIER ({q3Items.length})</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                  {q3Items.map((item, index) => (
                    <div
                      key={`q3-${item.id}-${index}`}
                      className="flex flex-col items-center border-2 border-purple-900/30 p-2.5 bg-black/5 rounded-lg w-full relative hover:z-40"
                    >
                      <ItemIcon item={item} />
                      <span className="font-pixel text-[11px] mt-1.5 text-center leading-tight text-black w-full break-words line-clamp-2">
                        {formatItemName(item.id, item.name)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quality 1 & 2 Section */}
            {q12Items.length > 0 && (
              <div className="border-2 border-black/20 bg-black/5 p-4 rounded-lg">
                <h3 className="font-pixel text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>🔹</span>
                  <span>STANDARD ITEMS ({q12Items.length})</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                  {q12Items.map((item, index) => (
                    <div
                      key={`q12-${item.id}-${index}`}
                      className="flex flex-col items-center border-2 border-black/20 p-2.5 bg-black/5 rounded-lg w-full relative hover:z-40"
                    >
                      <ItemIcon item={item} />
                      <span className="font-pixel text-[11px] mt-1.5 text-center leading-tight text-black w-full break-words line-clamp-2">
                        {formatItemName(item.id, item.name)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quality 0 Section */}
            {q0Items.length > 0 && (
              <div className="border-2 border-gray-400 bg-gray-200/50 p-4 rounded-lg">
                <h3 className="font-pixel text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
                  <span>💀</span>
                  <span>QUALITY 0 — LOW TIER ({q0Items.length})</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                  {q0Items.map((item, index) => (
                    <div
                      key={`q0-${item.id}-${index}`}
                      className="flex flex-col items-center border-2 border-gray-400 p-2.5 bg-black/5 rounded-lg w-full relative hover:z-40"
                    >
                      <ItemIcon item={item} />
                      <span className="font-pixel text-[11px] mt-1.5 text-center leading-tight text-gray-600 w-full break-words line-clamp-2">
                        {formatItemName(item.id, item.name)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {uniqueItemObjects.length === 0 && (
              <div className="w-full text-center py-8 font-pixel text-xl text-gray-700">
                No items collected in this run...
              </div>
            )}
          </section>

          {/* Collected Trinkets */}
          <section className="isaac-card p-6">
            <h2 className="font-pixel text-xl font-bold mb-4 border-b-4 border-black pb-2">
              Trinkets ({uniqueTrinketObjects.length})
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
              {uniqueTrinketObjects.length > 0 ? (
                uniqueTrinketObjects.map((trinket, index) => {
                  const formattedName = formatItemName(
                    trinket.id,
                    trinket.name,
                  );
                  return (
                    <div
                      key={`trinket-${trinket.id}-${index}`}
                      className="flex flex-col items-center border-2 border-black/20 p-2.5 bg-black/5 rounded-lg w-full relative hover:z-40"
                    >
                      <ItemIcon item={trinket} />
                      <span className="font-pixel text-[11px] mt-1.5 text-center leading-tight text-black w-full break-words line-clamp-2">
                        {formattedName}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-4 font-pixel text-sm text-gray-700">
                  No trinkets collected.
                </div>
              )}
            </div>
          </section>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
