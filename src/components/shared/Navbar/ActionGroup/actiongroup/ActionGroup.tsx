import React from 'react';
import GithubButton from './GithubButton/GithubButton';
import SearchButton from './SearchButton/SearchButton';
import useTheme from '@/hooks/useTheme';
import ThemeButton from './ThemeButton/ThemeButton';

interface ActionGroupProps {
  className: string;

}

const ActionGroup: React.FC<ActionGroupProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={className}>
      <SearchButton size={5} theme={theme} className="w-7 mr-5" />
      <ThemeButton size={5} setTheme={setTheme} theme={theme} className="w-14 mr-5 " />
      <GithubButton size={7} theme={theme} className="w-7 mr-6" />
    </div>
  );
};

export default ActionGroup;
