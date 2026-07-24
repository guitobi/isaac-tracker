import { CharacterInfo } from '../types';

export type ResultFilterType = 'ALL' | 'VICTORY' | 'DEATH';

interface RunFiltersProps {
  resultFilter: ResultFilterType;
  setResultFilter: (filter: ResultFilterType) => void;
  selectedCharacterId: number | 'ALL';
  setSelectedCharacterId: (id: number | 'ALL') => void;
  characters: CharacterInfo[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function RunFilters({
  resultFilter,
  setResultFilter,
  selectedCharacterId,
  setSelectedCharacterId,
  characters,
  searchTerm,
  setSearchTerm,
}: RunFiltersProps) {
  return (
    <div className="isaac-card p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex gap-2 font-pixel">
        {(['ALL', 'VICTORY', 'DEATH'] as ResultFilterType[]).map((filter) => (
          <button
            key={filter}
            onClick={() => setResultFilter(filter)}
            className={`px-3 py-1.5 border-2 border-black font-bold transition-colors ${
              resultFilter === filter
                ? 'bg-[#8b0000] text-white shadow-[2px_2px_0_rgba(0,0,0,1)]'
                : 'bg-black/10 text-black hover:bg-black/20'
            }`}
          >
            {filter}
          </button>
        ))}
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
          placeholder="Search SEED..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-black/10 text-black font-bold border-2 border-black px-3 py-1.5 font-pixel text-xs placeholder-black/60 outline-none w-full md:w-44"
        />
      </div>
    </div>
  );
}
