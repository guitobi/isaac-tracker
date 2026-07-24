import { CharacterStats as ICharacterStats } from "../app/lib/stats";

interface CharacterStatsProps {
  stats: ICharacterStats[];
  selectedCharacterId?: number | "ALL";
  onSelectCharacter?: (characterId: number | "ALL") => void;
}

export function CharacterStats({
  stats,
  selectedCharacterId = "ALL",
  onSelectCharacter,
}: CharacterStatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="isaac-card p-6">
      <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-2">
        <h2 className="font-hand text-3xl font-extrabold text-black">
          Character Performance Matrix
        </h2>
        {selectedCharacterId !== "ALL" && onSelectCharacter && (
          <button
            onClick={() => onSelectCharacter("ALL")}
            className="text-xs font-pixel font-bold text-[#8b0000] hover:underline"
          >
            Show All Characters &rarr;
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const charName = item.character?.name || `Character #${item.characterId}`;
          const isTainted = item.character?.isTainted;
          const isSelected = selectedCharacterId === item.characterId;

          return (
            <div
              key={`char-stat-${item.characterId}`}
              onClick={() => onSelectCharacter?.(item.characterId)}
              className={`border-4 border-black p-3 bg-black/5 cursor-pointer transition-all hover:-translate-y-0.5 ${
                isSelected
                  ? "bg-[#c39832]/20 border-[#c39832] shadow-[4px_4px_0_rgba(195,152,50,0.8)]"
                  : "hover:bg-black/10 shadow-[2px_2px_0_rgba(0,0,0,1)]"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-hand text-xl font-bold text-black truncate max-w-[130px]">
                  {charName}
                </span>
                {isTainted && (
                  <span className="px-1 py-0.5 text-[10px] font-pixel font-bold bg-purple-900 text-purple-200 border border-black shrink-0">
                    TAINTED
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-center mt-2 font-pixel text-xs">
                <div className="bg-black/10 p-1.5 border border-black/20">
                  <p className="text-[10px] text-gray-700">Win Rate</p>
                  <p className="font-bold text-[#8b0000] text-sm">
                    {item.winRate}%
                  </p>
                </div>
                <div className="bg-black/10 p-1.5 border border-black/20">
                  <p className="text-[10px] text-gray-700">Streak</p>
                  <p className="font-bold text-[#c39832] text-sm">
                    🔥 {item.winStreak}
                  </p>
                </div>
              </div>

              <div className="mt-2 pt-1 border-t border-black/10 flex justify-between items-center font-pixel text-[10px] text-gray-800">
                <span>Runs: {item.totalRuns}</span>
                <span>
                  {item.victories}W / {item.deaths}L
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
