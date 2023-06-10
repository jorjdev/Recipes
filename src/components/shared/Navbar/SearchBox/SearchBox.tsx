import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useSearchBar from '@/hooks/useSearchBar';
import useTheme from '@/hooks/useTheme';

interface SearchBoxProps {
  className: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ className }) => {
  const { handleSearchBarClose } = useSearchBar();
  const { theme } = useTheme();
  return (
    <div className={className}>
      <div className="relative">
        <form
          className={`${
            theme === 'dark' ? 'bg-dark-background' : 'bg-light-background'
          } flex justify-between`}
        >
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon
              className={`${
                theme === 'dark'
                  ? 'text-dark-search-text'
                  : 'text-light-search-text'
              }`}
            />
          </div>
          <input
            className={`rounded-3xl pl-12 ${
              theme === 'dark'
                ? 'bg-dark-search-bg-color text-dark-search-text'
                : 'bg-light-search-bg-color text-light-search-text'
            } w-[70vw] h-[10vw]`}
            placeholder="Search..."
            maxLength={64}
            type="text"
          />
          <button
            className={`relative ml-4 ${
              theme === 'dark'
                ? 'text-dark-search-text'
                : 'text-light-search-text'
            }`}
            onClick={handleSearchBarClose}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
