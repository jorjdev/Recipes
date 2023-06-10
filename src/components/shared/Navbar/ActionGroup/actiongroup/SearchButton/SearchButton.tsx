import React from 'react';
import SearchIconSvg from '@/assets/search-icon.svg';

interface SearchButtonProps {
  className: string;
  size: number;
  theme: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  className,
  size,
  theme,
}) => (
  <div className={className}>
    <img
      src={theme === 'dark' ? SearchIconSvg : SearchIconSvg}
      alt="Search"
      className={`w-${size} h-${size}`}
    />
  </div>
);

export default SearchButton;
