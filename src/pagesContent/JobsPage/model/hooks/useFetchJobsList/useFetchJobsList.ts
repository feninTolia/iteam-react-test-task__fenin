'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';

export const useFetchJobsList = (search?: string) => {
  const result = useQuery({
    queryKey: ['jobs-list'],
    queryFn: () => fetchJobsList(search),
    enabled: false,
  });

  return result;
};
