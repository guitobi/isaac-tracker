"use client";

import { useState, useMemo } from 'react';
import { useRuns } from '../hooks/useRuns';
import { Header } from '../components/Header';
import { RunCard } from '../components/RunCard';
import { StatsBanner } from '../components/StatsBanner';
import { RunFilters, ResultFilterType, ModeFilterType } from '../components/RunFilters';
import { calculateDashboardStats, calculateCharacterStats } from './lib/stats';
import { CharacterStats } from '../components/CharacterStats';
import { CharacterInfo } from '../types';
import { getChallengeName } from './lib/challenges';

export default function Home() {
  const { data: runs = [], isLoading, error } = useRuns();

  const [resultFilter, setResultFilter] = useState<ResultFilterType>('ALL');
  const [modeFilter, setModeFilter] = useState<ModeFilterType>('ALL');
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = useMemo(() => calculateDashboardStats(runs), [runs]);
  const characterStats = useMemo(() => calculateCharacterStats(runs), [runs]);

  const uniqueCharacters = useMemo(() => {
    const map = new Map<number, CharacterInfo>();
    for (const r of runs) {
      if (r.character) {
        map.set(r.character.id, r.character);
      }
    }
    return Array.from(map.values());
  }, [runs]);

  const filteredRuns = useMemo(() => {
    return runs.filter((run) => {
      if (resultFilter === 'VICTORY' && !run.isVictory) return false;
      if (resultFilter === 'DEATH' && run.isVictory) return false;

      const challengeName = getChallengeName(run.challengeId);
      const isChallengeRun = challengeName !== null;

      if (modeFilter === 'NORMAL' && isChallengeRun) return false;
      if (modeFilter === 'CHALLENGE' && !isChallengeRun) return false;

      if (selectedCharacterId !== 'ALL' && run.characterId !== selectedCharacterId) {
        return false;
      }

      if (searchTerm.trim() !== '') {
        const term = searchTerm.trim().toLowerCase();
        const seedMatch = run.seed?.toLowerCase().includes(term);
        const charMatch = run.character?.name?.toLowerCase().includes(term);
        const challengeMatch = challengeName ? challengeName.toLowerCase().includes(term) : false;
        const challengeIdMatch = run.challengeId
          ? `challenge #${run.challengeId}`.toLowerCase().includes(term) ||
            `#${run.challengeId}`.includes(term)
          : false;

        if (!seedMatch && !charMatch && !challengeMatch && !challengeIdMatch) {
          return false;
        }
      }

      return true;
    });
  }, [runs, resultFilter, modeFilter, selectedCharacterId, searchTerm]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-pixel">
        Error loading runs: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto flex flex-col gap-8">
      <Header isLoading={isLoading} runCount={runs.length} />

      {!isLoading && runs.length > 0 && <StatsBanner stats={stats} />}

      {!isLoading && runs.length > 0 && (
        <CharacterStats
          stats={characterStats}
          selectedCharacterId={selectedCharacterId}
          onSelectCharacter={setSelectedCharacterId}
        />
      )}

      <RunFilters
        resultFilter={resultFilter}
        setResultFilter={setResultFilter}
        modeFilter={modeFilter}
        setModeFilter={setModeFilter}
        selectedCharacterId={selectedCharacterId}
        setSelectedCharacterId={setSelectedCharacterId}
        characters={uniqueCharacters}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRuns.map((run) => (
          <RunCard key={run.id} run={run} />
        ))}
        {filteredRuns.length === 0 && !isLoading && (
          <div className="col-span-full text-center py-12 isaac-card font-hand text-3xl text-black font-bold">
            No runs match the selected filters.
          </div>
        )}
      </main>
    </div>
  );
}
