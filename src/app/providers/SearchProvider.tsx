'use client';
import { SearchContext } from '@/shared/lib/context/SearchContext';
import { ReactNode, useCallback, useState } from 'react';

interface ISearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [search, setSearchState] = useState('');

  const setSearch = useCallback((value: string) => {
    setSearchState(value);
  }, []);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
