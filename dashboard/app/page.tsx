"use client";

import { useQuery } from '@tanstack/react-query';

interface ItemInfo {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Run {
  id: number;
  seed: string;
  isVictory: boolean;
  duration: number;
  items: number[];
  characterId: number;
  itemObjects: ItemInfo[];
}

export default function Home() {
  const { data: runs = [], isLoading, error } = useQuery<Run[]>({
    queryKey: ['runs'],
    queryFn: async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const res = await fetch(`${apiUrl}/runs`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    }
  });

  return (
    <>
      <div className="glow-blob pink"></div>
      <div className="glow-blob purple"></div>

      <div className="min-h-screen p-8 max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Шапка */}
        <header className="flex justify-between items-center">
          <h1 className="font-display text-5xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 drop-shadow-sm">
              Isaac
            </span> Tracker
          </h1>
          <div className="bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 text-sm font-semibold shadow-lg">
            {isLoading ? 'Loading...' : `${runs.length} Runs Recorded`}
          </div>
        </header>

        {/* Контент */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {runs.map(run => (
            <div key={run.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transition-all hover:-translate-y-2 hover:shadow-pink-500/10 cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">Isaac</h3>
                  <p className="text-gray-400 font-mono text-sm mt-1">SEED {run.seed}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${run.isVictory ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-red-500/20 text-red-400 border-red-500/20'}`}>
                  {run.isVictory ? 'VICTORY' : 'DEATH'}
                </span>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Item Build</p>
                <div className="flex gap-3 flex-wrap">
                  {run.itemObjects && run.itemObjects.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="relative group/item">
                      <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden hover:border-pink-500/50 transition-colors">
                        <img src={item.image} alt={item.name} className="w-8 h-8 object-contain drop-shadow-md" />
                      </div>
                      
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
                        <p className="text-white font-bold text-sm mb-1">{item.name}</p>
                        <p className="text-gray-400 text-xs italic">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
