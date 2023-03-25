import React from 'react';

interface SearchButtonProps {
  className: string,
  size : number,
}

const SearchButton : React.FC<SearchButtonProps> = ({ className, size }) => (
  <button className={className} type="button">

    <img src="src/assets/search-icon.svg" alt="Logo" className={`w-${size} h-${size}`} />
  </button>
);

export default SearchButton;
