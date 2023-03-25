import React from 'react';
import GithubSvg from '@/assets/github-icon.svg';

interface GithubButtonProps {
  className: string,
  size : number,
}

const GithubButton : React.FC<GithubButtonProps> = ({ className, size }) => (
  <button className={className} type="button">

    <img src={GithubSvg} alt="Github" className={`w-${size} h-${size}`} />
  </button>
);

export default GithubButton;
