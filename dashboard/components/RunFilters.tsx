import { CharacterInfo } from '../types';

export type ResultFilterType = 'ALL' | 'VICTORY' | 'DEATH';
export type ModeFilterType = 'ALL' | 'NORMAL' | 'CHALLENGE';

interface RunFiltersProps {
  resultFilter: ResultFilterType;
  setResultFilter: (filter: ResultFilterType) => void;
  modeFilter?: ModeFilterType;
  setModeFilter?: (filter: ModeFilterType) => void;
  selectedCharacterId: number | 'ALL';
  setSelectedCharacterId: (id: number | 'ALL') => void;
  characters: CharacterInfo[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function RunFilters({
  resultFilter,
  setResultFilter,
  modeFilter = 'ALL',
  setModeFilter,
  selectedCharacterId,
  setSelectedCharacterId,
  characters,
  searchTerm,
  setSearchTerm,
}: RunFiltersProps) {
  return (
    <div className="isaac-card p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex flex-wrap gap-4 items-center font-pixel">
        <div className="flex gap-1.5">
          {(['ALL', 'VICTORY', 'DEATH'] as ResultFilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setResultFilter(filter)}
              className={`px-3 py-1.5 border-2 border-black font-bold transition-colors text-xs ${
                resultFilter === filter
                  ? 'bg-[#8b0000] text-white shadow-[2px_2px_0_rgba(0,0,0,1)]'
                  : 'bg-black/10 text-black hover:bg-black/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {setModeFilter && (
          <div className="flex gap-1.5 border-l-2 border-black/20 pl-4">
            {(['ALL', 'NORMAL', 'CHALLENGE'] as ModeFilterType[]).map((mode) => (
              <button
                key={`mode-${mode}`}
                onClick={() => setModeFilter(mode)}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-colors text-xs ${
                  modeFilter === mode
                    ? 'bg-[#c39832] text-black shadow-[2px_2px_0_rgba(0,0,0,1)]'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                {mode === 'NORMAL' ? 'NORMAL RUNS' : mode === 'CHALLENGE' ? '🎯 CHALLENGES' : 'ALL MODES'}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <select
          value={selectedCharacterId}
          onChange={(e) =>
            setSelectedCharacterId(
              e.target.value === 'ALL' ? 'ALL' : Number(e.target.value)
            )
          }
          className="bg-black/10 text-black font-bold border-2 border-black px-3 py-1.5 font-pixel text-xs outline-none"
        >
          <option value="ALL" className="bg-[#e3d2b8] text-black">All Characters</option>
          {characters.map((char) => (
            <option key={`filter-char-${char.id}`} value={char.id} className="bg-[#e3d2b8] text-black">
              {char.name} {char.isTainted ? '(Tainted)' : ''}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search SEED or Challenge..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-black/10 text-black font-bold border-2 border-black px-3 py-1.5 font-pixel text-xs placeholder-black/60 outline-none w-full md:w-44"
        />
      </div>
    </div>
  );
}
