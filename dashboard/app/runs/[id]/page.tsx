"use client";

import { useParams, useRouter } from 'next/navigation';
import { ItemIcon } from '../../../components/ItemIcon';
import { useRun } from '../../../hooks/useRuns';

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
            <h1 className="font-hand text-5xl font-extrabold">Isaac</h1>
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
            <p className="font-hand text-2xl font-bold">Char ID</p>
            <p className="text-3xl font-pixel mt-1">{run.characterId}</p>
          </div>
          <div className="border-4 border-black p-4 bg-[rgba(0,0,0,0.05)]">
            <p className="font-hand text-2xl font-bold">Items</p>
            <p className="text-3xl font-pixel mt-1">{run.itemObjects ? run.itemObjects.length : 0}</p>
          </div>
        </div>
      </header>

      {/* Зібрані предмети */}
      <section className="isaac-card p-8">
        <h2 className="font-hand text-4xl font-bold mb-6 border-b-4 border-black pb-2">Items Collected</h2>
        
        <div className="flex gap-4 flex-wrap">
          {run.itemObjects && run.itemObjects.length > 0 ? (
            run.itemObjects.map((item, index) => (
              <div key={`item-${item.id}-${index}`} className="flex flex-col items-center">
                <ItemIcon item={item} />
                <span className="font-pixel text-lg mt-2 max-w-[60px] text-center leading-none">{item.name}</span>
              </div>
            ))
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
          {run.trinkets && run.trinkets.length > 0 ? (
            run.trinkets.map((trinketId, index) => (
              <div key={`trinket-${trinketId}-${index}`} className="flex flex-col items-center">
                <img
                  src={`/trinkets/${trinketId}.png`}
                  alt={`Trinket ${trinketId}`}
                  className="w-16 h-16 object-contain drop-shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                  }}
                />
                <span className="font-pixel text-lg mt-2 text-center">ID: {trinketId}</span>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-8 font-hand text-3xl text-gray-700">
              No trinkets.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
