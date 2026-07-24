"use client";

import { useParams, useRouter } from 'next/navigation';
import { ItemIcon } from '../../../components/ItemIcon';
import { useRun } from '../../../hooks/useRuns';
import { getBossImageUrl } from '../../lib/bosses';
import { formatItemName } from '../../lib/items';

export default function RunDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data: run, isLoading, error } = useRun(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="animate-pulse text-2xl font-display">Loading run data...</p>
      </div>
    );
  }

  if (error || !run) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading run details: {error?.message || 'Run not found'}
      </div>
    );
  }

  const uniqueItemObjects = run?.itemObjects
    ? Array.from(new Map(run.itemObjects.map((item) => [item.id, item])).values())
    : [];

  const uniqueTrinketObjects = run?.trinketObjects
    ? Array.from(new Map(run.trinketObjects.map((trinket) => [trinket.id, trinket])).values())
    : [];

  const uniqueBosses = run?.bosses
    ? Array.from(new Set(run.bosses))
    : [];

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto flex flex-col gap-8">
      
      {/* Шапка сторінки */}
      <button 
        onClick={() => router.push('/')}
        className="self-start px-4 py-2 bg-black hover:bg-[#2a221d] text-white border-4 border-white font-pixel text-xl shadow-[4px_4px_0_rgba(0,0,0,1)] transition-colors"
      >
        {"< BACK TO BASEMENT"}
      </button>

      <header className="isaac-card p-8">
        <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-hand text-5xl font-extrabold">
                {run.character?.name || `Character #${run.characterId}`}
              </h1>
              {run.character?.isTainted && (
                <span className="px-2 py-1 text-sm font-pixel font-bold bg-purple-900 text-purple-200 border-2 border-black">
                  TAINTED
                </span>
              )}
            </div>
            {run.user?.username && (
              <p className="font-pixel text-xl text-gray-700 mt-1">Player: {run.user.username}</p>
            )}
            <p className="font-pixel text-2xl mt-2">SEED: {run.seed}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`px-4 py-2 text-2xl font-bold border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.5)] ${run.isVictory ? 'bg-[#c39832] text-black' : 'bg-[#8b0000] text-white'}`}>
              {run.isVictory ? 'VICTORY' : 'DEATH'}
            </span>
            <p className="text-gray-800 text-xl font-pixel mt-2">ID: #{run.id}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="border-4 border-black p-4 bg-[rgba(0,0,0,0.05)]">
            <p className="font-hand text-2xl font-bold">Time</p>
            <p className="text-3xl font-pixel mt-1">{Math.floor(run.duration / 60)}m {run.duration % 60}s</p>
          </div>
          <div className="border-4 border-black p-4 bg-[rgba(0,0,0,0.05)]">
            <p className="font-hand text-2xl font-bold">Character</p>
            <p className="text-3xl font-pixel mt-1">{run.character?.name || `#${run.characterId}`}</p>
          </div>
          <div className="border-4 border-black p-4 bg-[rgba(0,0,0,0.05)]">
            <p className="font-hand text-2xl font-bold">Items</p>
            <p className="text-3xl font-pixel mt-1">{uniqueItemObjects.length}</p>
          </div>
        </div>
      </header>

      {/* Зібрані предмети */}
      <section className="isaac-card p-8">
        <h2 className="font-hand text-4xl font-bold mb-6 border-b-4 border-black pb-2">Items Collected</h2>
        
        <div className="flex gap-4 flex-wrap">
          {uniqueItemObjects.length > 0 ? (
            uniqueItemObjects.map((item, index) => {
              const formattedName = formatItemName(item.id, item.name);
              return (
                <div key={`item-${item.id}-${index}`} className="flex flex-col items-center border-2 border-black/20 p-2 bg-[rgba(0,0,0,0.02)] rounded w-24">
                  <ItemIcon item={item} />
                  <span className="font-pixel text-xs mt-2 text-center leading-tight line-clamp-2 w-full break-words">{formattedName}</span>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center py-8 font-hand text-3xl text-gray-700">
              Nothing found...
            </div>
          )}
        </div>
      </section>

      {/* Зібрані брелоки */}
      <section className="isaac-card p-8">
        <h2 className="font-hand text-4xl font-bold mb-6 border-b-4 border-black pb-2">Trinkets</h2>
        
        <div className="flex gap-4 flex-wrap">
          {uniqueTrinketObjects.length > 0 ? (
            uniqueTrinketObjects.map((trinket, index) => {
              const formattedName = formatItemName(trinket.id, trinket.name);
              return (
                <div key={`trinket-${trinket.id}-${index}`} className="flex flex-col items-center border-2 border-black/20 p-2 bg-[rgba(0,0,0,0.02)] rounded w-24">
                  <ItemIcon item={trinket} />
                  <span className="font-pixel text-xs mt-2 text-center leading-tight line-clamp-2 w-full break-words">{formattedName}</span>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center py-8 font-hand text-3xl text-gray-700">
              No trinkets.
            </div>
          )}
        </div>
      </section>

      {/* Переможені боси */}
      <section className="isaac-card p-8">
        <h2 className="font-hand text-4xl font-bold mb-6 border-b-4 border-black pb-2">Bosses Defeated</h2>
        
        <div className="flex gap-4 flex-wrap">
          {uniqueBosses.length > 0 ? (
            uniqueBosses.map((boss, index) => {
              const imageUrl = getBossImageUrl(boss);
              return (
                <div key={`boss-${index}`} className="flex flex-col items-center border-2 border-black p-2 bg-[rgba(0,0,0,0.03)] min-w-[80px]">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={boss}
                      className="w-16 h-16 object-contain drop-shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center font-pixel text-2xl">👹</div>
                  )}
                  <span className="font-pixel text-sm mt-2 text-center max-w-[100px] leading-tight">{boss}</span>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center py-4 font-hand text-2xl text-gray-700">
              No bosses defeated.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
