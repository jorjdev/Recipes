import { MouseEventHandler, useContext } from 'react';
import SearchBarContext from '@/context/SearchBarContext';

const useSearchBar = () => {
  const { isSearchBarOpen, setIsSearchBarOpen } = useContext(SearchBarContext);

  const handleSearchIconClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsSearchBarOpen(true);
  };

  const handleSearchBarClose: MouseEventHandler<HTMLButtonElement> = () => {
    setIsSearchBarOpen(false);
  };

  return {
    isSearchBarOpen,
    handleSearchIconClick,
    handleSearchBarClose,
  };
};
export default useSearchBar;
