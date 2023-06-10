import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface ISearchBarContext {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchBarContext = createContext<ISearchBarContext>({
  isSearchBarOpen: false,
  setIsSearchBarOpen: () => {},
});

export const SearchBarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  const value = useMemo(
    () => ({ isSearchBarOpen, setIsSearchBarOpen }),
    [isSearchBarOpen],
  );

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarContext;
