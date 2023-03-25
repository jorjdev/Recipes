import React from 'react';
import GithubButton from './GithubButton/GithubButton';
import SearchButton from './SearchButton/SearchButton';
import ThemeButton from './ThemeButton/ThemeButton';

interface ActionGroupProps {
  className: string;

}

const ActionGroup: React.FC<ActionGroupProps> = ({ className }) => (
  <div className={className}>
    <SearchButton size={5} className="w-7 mr-5" />
    <ThemeButton mode="light" size={5} className="w-14 mr-5 " />
    <GithubButton size={5} className="w-7 mr-6" />
  </div>
);

export default ActionGroup;
