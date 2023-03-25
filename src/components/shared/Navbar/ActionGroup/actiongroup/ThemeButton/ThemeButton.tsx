import React from 'react';
import DarkModeSvg from '@/assets/dark-mode.svg';
import LightModeSvg from '@/assets/light-mode.svg';

interface ThemeButtonProps {
  className: string;
  size: number;
  mode: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ className, size, mode }) => (
  <button className={className} type="button">
    <img
      src={

        mode === 'light' ? LightModeSvg : DarkModeSvg
        }
      alt="Theme"
      className={`w-${size} h-${size}`}
    />
  </button>
);

export default ThemeButton;
