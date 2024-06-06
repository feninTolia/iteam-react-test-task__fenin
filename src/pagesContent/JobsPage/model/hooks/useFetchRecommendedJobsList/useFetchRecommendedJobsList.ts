// 'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';

export const useFetchRecommendedJobsList = (search?: string) => {
  return useQuery({
    queryKey: ['recommended-jobs-list'],
    queryFn: () => {
      if (!search) return null;

      return fetchJobsList(search);
    },
    refetchOnReconnect: false,
    enabled: false,
  });
};
