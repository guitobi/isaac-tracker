import { Run } from '../types';
import { ItemIcon } from './ItemIcon';
import Link from 'next/link';

interface RunCardProps {
  run: Run;
}

export function RunCard({ run }: RunCardProps) {
  return (
    <Link href={`/runs/${run.id}`} className="block">
      <div className="isaac-card p-5 transition-transform hover:-translate-y-2 hover:rotate-1 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2 border-b-4 border-black pb-2">
            <div>
              <h3 className="font-hand font-bold text-3xl">Isaac</h3>
              <p className="font-pixel text-xl text-gray-800">SEED: {run.seed}</p>
            </div>
            <span className={`px-2 py-1 text-xl font-bold border-4 border-black ${run.isVictory ? 'bg-[#c39832] text-black' : 'bg-[#8b0000] text-white'}`}>
              {run.isVictory ? 'VICTORY' : 'DEATH'}
            </span>
          </div>

          <div className="mt-4">
            <p className="font-hand text-xl font-bold mb-2">Items:</p>
            <div className="flex gap-2 flex-wrap">
              {run.itemObjects && run.itemObjects.map((item, index) => (
                <ItemIcon key={`${item.id}-${index}`} item={item} />
              ))}
              {(!run.itemObjects || run.itemObjects.length === 0) && (
                <p className="font-hand text-xl text-gray-600">No items... yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
