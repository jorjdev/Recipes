import React from 'react';
import SearchIconSvg from '@/assets/search-icon.svg';

interface SearchButtonProps {
  className: string,
  size : number,
}

const SearchButton : React.FC<SearchButtonProps> = ({ className, size }) => (
  <button className={className} type="button">

    <img src={SearchIconSvg} alt="Search" className={`w-${size} h-${size}`} />
  </button>
);

export default SearchButton;
