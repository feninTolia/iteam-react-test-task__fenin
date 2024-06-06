'use client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';
import { useContext } from 'react';
import { SearchContext } from '@/shared/lib/context/SearchContext';

export const useFetchJobsList = (search?: string) => {
  const { search: searchContext } = useContext(SearchContext);

  const result = useQuery({
    queryKey: ['jobs-list'],
    queryFn: () => fetchJobsList(search ?? searchContext),
    enabled: false,
  });

  return result;
};
