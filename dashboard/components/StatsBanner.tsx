import { DashboardStats } from '../app/lib/stats';
import { ItemIcon } from './ItemIcon';
import { getCauseOfDeathInfo } from '../app/lib/bosses';

interface StatsBannerProps {
  stats: DashboardStats;
}

export function StatsBanner({ stats }: StatsBannerProps) {
  const avgMin = Math.floor(stats.avgDurationSec / 60);
  const avgSec = stats.avgDurationSec % 60;

  return (
    <div className="isaac-card p-6">
      <h2 className="font-pixel text-2xl font-extrabold mb-4 text-black border-b-4 border-black pb-2">
        Player Performance Overview
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-pixel text-base font-bold text-black">Win Rate</p>
          <p className="font-pixel text-3xl font-extrabold text-[#8b0000]">
            {stats.winRate}%
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">
            {stats.victories} W / {stats.deaths} L
          </p>
        </div>

        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-pixel text-base font-bold text-black">Win Streak</p>
          <p className="font-pixel text-3xl font-extrabold text-[#c39832]">
            🔥 {stats.winStreak}
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">Current streak</p>
        </div>

        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-pixel text-base font-bold text-black">Total Runs</p>
          <p className="font-pixel text-3xl font-extrabold text-black">
            {stats.totalRuns}
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">Tracked runs</p>
        </div>

        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-pixel text-base font-bold text-black">Avg Time</p>
          <p className="font-pixel text-3xl font-extrabold text-blue-900">
            {avgMin}m {avgSec}s
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">Per run</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-4 border-t-4 border-black">
        {stats.topWinningItems.length > 0 && (
          <div>
            <p className="font-pixel text-lg font-bold mb-3 text-black">
              Top Winning Items:
            </p>
            <div className="flex gap-4 flex-wrap items-center">
              {stats.topWinningItems.map(({ item, count }) => (
                <div
                  key={`top-win-item-${item.id}`}
                  className="flex items-center gap-2 border-2 border-black p-2 bg-black/10 rounded"
                >
                  <ItemIcon item={item} />
                  <div className="text-left">
                    <p className="font-pixel text-xs font-bold text-black max-w-[100px] truncate">
                      {item.name}
                    </p>
                    <p className="font-pixel text-xs font-bold text-[#8b0000]">
                      {count} wins
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {stats.nemesis && (() => {
          const nemesisInfo = getCauseOfDeathInfo(stats.nemesis.name);
          return (
            <div>
              <p className="font-pixel text-lg font-bold mb-3 text-[#8b0000] drop-shadow-md">
                Your Nemesis:
              </p>
              <div className="flex items-center gap-4 border-4 border-[#8b0000] p-4 bg-[#8b0000]/10 shadow-[4px_4px_0_#8b0000]">
                {nemesisInfo.imageUrl ? (
                  <div className="relative w-16 h-16 shrink-0 filter drop-shadow-[0_0_8px_rgba(139,0,0,0.8)]">
                    <img src={nemesisInfo.imageUrl} alt={nemesisInfo.name} className="w-full h-full object-contain pixelated animate-pulse" />
                  </div>
                ) : (
                  <div className="font-pixel text-4xl animate-pulse">☠️</div>
                )}
                <div>
                  <p className="font-pixel text-xl font-extrabold text-black uppercase">
                    {nemesisInfo.name}
                  </p>
                  <p className="font-pixel text-sm font-bold text-[#8b0000] mt-1">
                    Killed you {stats.nemesis.count} times
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
