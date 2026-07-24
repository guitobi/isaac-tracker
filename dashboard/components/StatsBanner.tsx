import { DashboardStats } from '../app/lib/stats';
import { ItemIcon } from './ItemIcon';

interface StatsBannerProps {
  stats: DashboardStats;
}

export function StatsBanner({ stats }: StatsBannerProps) {
  const avgMin = Math.floor(stats.avgDurationSec / 60);
  const avgSec = stats.avgDurationSec % 60;

  return (
    <div className="isaac-card p-6">
      <h2 className="font-hand text-4xl font-extrabold mb-4 text-black border-b-4 border-black pb-2">
        Player Performance Overview
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-hand text-xl font-bold text-black">Win Rate</p>
          <p className="font-pixel text-3xl font-extrabold text-[#8b0000]">
            {stats.winRate}%
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">
            {stats.victories} W / {stats.deaths} L
          </p>
        </div>

        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-hand text-xl font-bold text-black">Win Streak</p>
          <p className="font-pixel text-3xl font-extrabold text-[#c39832]">
            🔥 {stats.winStreak}
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">Current streak</p>
        </div>

        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-hand text-xl font-bold text-black">Total Runs</p>
          <p className="font-pixel text-3xl font-extrabold text-black">
            {stats.totalRuns}
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">Tracked runs</p>
        </div>

        <div className="border-4 border-black p-3 bg-black/10">
          <p className="font-hand text-xl font-bold text-black">Avg Time</p>
          <p className="font-pixel text-3xl font-extrabold text-blue-900">
            {avgMin}m {avgSec}s
          </p>
          <p className="font-pixel text-xs font-bold text-black/80 mt-1">Per run</p>
        </div>
      </div>

      {stats.topWinningItems.length > 0 && (
        <div className="mt-4 pt-4 border-t-4 border-black">
          <p className="font-hand text-2xl font-bold mb-3 text-black">
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
    </div>
  );
}
