import { createContext } from 'react';

export interface ISearchContextProps {
  search?: string;
  setSearch?: (search: string) => void;
}

export const SearchContext = createContext<ISearchContextProps>({});
