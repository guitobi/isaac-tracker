"use client";

import { useQuery } from '@tanstack/react-query';
import { Run } from '../types';
import { Header } from '../components/Header';
import { RunCard } from '../components/RunCard';

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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading runs: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto flex flex-col gap-8">
      <Header isLoading={isLoading} runCount={runs.length} />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {runs.map(run => (
          <RunCard key={run.id} run={run} />
        ))}
      </main>
    </div>
  );
}
