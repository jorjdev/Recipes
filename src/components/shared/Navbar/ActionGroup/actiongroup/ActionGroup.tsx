import React from 'react';
import GithubButton from './GithubButton/GithubButton';
import SearchButton from './SearchButton/SearchButton';
import useTheme from '@/hooks/useTheme';
import ThemeButton from './ThemeButton/ThemeButton';
import useSearchBar from '@/hooks/useSearchBar';

interface ActionGroupProps {
  className: string;
}

const ActionGroup: React.FC<ActionGroupProps> = ({
  className,
}) => {
  const { theme, setTheme } = useTheme();
  const { handleSearchIconClick } = useSearchBar();

  return (
    <div className={className}>
      <button className="search-icon-button" onClick={handleSearchIconClick} type="button">
        <SearchButton size={5} theme={theme} className="w-7 mr-5" />
      </button>
      <ThemeButton
        size={5}
        setTheme={setTheme}
        theme={theme}
        className="w-14 mr-5"
      />
      <GithubButton size={7} theme={theme} className="w-7 mr-6" />
    </div>
  );
};

export default ActionGroup;
