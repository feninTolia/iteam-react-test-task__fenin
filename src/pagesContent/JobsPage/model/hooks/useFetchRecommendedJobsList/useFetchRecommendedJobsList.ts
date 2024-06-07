// 'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';

interface IOptions {
  enabled: boolean;
}

export const useFetchRecommendedJobsList = (
  search?: string,
  options?: IOptions
) => {
  return useQuery({
    queryKey: ['recommended-jobs-list'],
    staleTime: 60000,
    queryFn: () => {
      if (!search) return null;

      return fetchJobsList(search);
    },
    refetchOnReconnect: false,
    enabled: options?.enabled,
  });
};
