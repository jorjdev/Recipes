import React from 'react';

interface GithubButtonProps {
  className: string,
  size : number,
}

const GithubButton : React.FC<GithubButtonProps> = ({ className, size }) => (
  <button className={className} type="button">

    <img src="src/assets/github-icon.svg" alt="Logo" className={`w-${size} h-${size}`} />
  </button>
);

export default GithubButton;
