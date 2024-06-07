'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';
import { QueryKey } from '@/shared/constants/tanstackQuery';

export const useFetchJobsList = (search?: string) => {
  const result = useQuery({
    queryKey: [QueryKey.JOBS_LIST],
    queryFn: () => fetchJobsList(search),
    enabled: false,
  });

  return result;
};
