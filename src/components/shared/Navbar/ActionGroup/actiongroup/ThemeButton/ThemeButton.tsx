import React from 'react';

interface ThemeButtonProps {
  className: string;
  size: number;
  mode: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ className, size, mode }) => (
  <button className={className} type="button">
    <img
      src={
          'src/assets/'
          + `${mode === 'light' ? 'light-mode.svg' : 'dark-mode.svg'}`
        }
      alt="Logo"
      className={`w-${size} h-${size}`}
    />
  </button>
);

export default ThemeButton;
