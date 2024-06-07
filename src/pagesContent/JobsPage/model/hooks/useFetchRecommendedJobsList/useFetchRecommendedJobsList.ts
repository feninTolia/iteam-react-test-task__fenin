// 'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';
import { QueryKey } from '@/shared/constants/tanstackQuery';

interface IOptions {
  enabled: boolean;
}

export const useFetchRecommendedJobsList = (
  search?: string,
  options?: IOptions
) => {
  return useQuery({
    queryKey: [QueryKey.RECOMMENDED_JOBS],
    staleTime: 60000,
    queryFn: () => {
      if (!search) return null;

      return fetchJobsList(search);
    },
    refetchOnReconnect: false,
    enabled: options?.enabled,
  });
};
