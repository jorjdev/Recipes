import React from 'react';
import '../App.css';
import Navbar from '@/components/shared/Navbar/Navbar';
import useSearchBar from '@/hooks/useSearchBar';

const App: React.FC = () => {
  const { isSearchBarOpen } = useSearchBar();
  return (
    <Navbar
      className={`flex flex-row mt-4 ml-7
sm:bg-transparent ${isSearchBarOpen ? 'justify-center' : 'justify-between'} `}
    />
  );
};

export default App;
