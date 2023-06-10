import React, { useState } from 'react';
import GithubLightSVG from '@/assets/light/github.svg';
import GithubDarkSVG from '@/assets/dark/github.svg';
import AuthWidget from './AuthWidget/AuthWidget';

interface GithubButtonProps {
  className: string;
  size: number;
  theme: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({
  className,
  size,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={className} onClick={handleWidget} type="button">
        <img
          src={theme === 'dark' ? GithubDarkSVG : GithubLightSVG}
          alt="Github"
          className={`w-${size} h-${size}`}
        />
      </button>

      <AuthWidget className={`absolute mt-10 ml-28 ${theme === 'dark' ? 'bg-light-background' : 'bg-dark-background'} `} isVisible={isOpen} />
    </>
  );
};

export default GithubButton;
