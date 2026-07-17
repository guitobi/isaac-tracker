import { useQuery } from '@tanstack/react-query';
import { Run } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const getAuthHeaders = (): HeadersInit => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('isaac_token');
    if (token) {
      return { 'Authorization': `Bearer ${token}` };
    }
  }
  return {};
};

export function useRuns() {
  return useQuery<Run[]>({
    queryKey: ['runs'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/runs`, {
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    }
  });
}

export function useRun(id: string) {
  return useQuery<Run>({
    queryKey: ['run', id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/runs/${id}`, {
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    enabled: !!id,
  });
}
