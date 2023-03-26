import React from 'react';
import GithubLightSVG from '@/assets/light/github.svg';
import GithubDarkSVG from '@/assets/dark/github.svg';

interface GithubButtonProps {
  className: string,
  size : number,
  theme : string,
}

const GithubButton : React.FC<GithubButtonProps> = ({ className, size, theme }) => (

  <button className={className} type="button">
    <a href="https://github.com/jorjdev/Recipes" target="_blank" rel="noopener noreferrer">
      <img src={theme === 'dark' ? GithubDarkSVG : GithubLightSVG} alt="Github" className={`w-${size} h-${size}`} />
    </a>
  </button>

);

export default GithubButton;
