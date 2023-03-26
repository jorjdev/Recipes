import React from 'react';
import SearchIconSvg from '@/assets/search-icon.svg';

interface SearchButtonProps {
  className: string,
  size : number,
  theme : string,
}

const SearchButton : React.FC<SearchButtonProps> = ({ className, size, theme }) => (

  <button className={className} type="button">

    <img src={theme === 'dark' ? SearchIconSvg : SearchIconSvg} alt="Search" className={`w-${size} h-${size}`} />
  </button>
);

export default SearchButton;
