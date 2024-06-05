'use client';
import { SearchContext } from '@/shared/lib/context/SearchContext';
import { ReactNode, useMemo, useState } from 'react';

interface ISearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [search, setSearch] = useState('');
  const defaultProps = useMemo(() => ({ search, setSearch }), [search]);

  return (
    <SearchContext.Provider value={defaultProps}>
      {children}
    </SearchContext.Provider>
  );
};
