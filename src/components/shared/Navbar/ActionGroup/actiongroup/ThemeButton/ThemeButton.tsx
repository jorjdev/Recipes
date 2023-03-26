import React, { Dispatch, SetStateAction, useEffect } from 'react';
import DarkModeSvg from '@/assets/dark-mode.svg';
import LightModeSvg from '@/assets/light-mode.svg';

interface ThemeButtonProps {
  className: string;
  size: number;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  className,
  size,
  theme,
  setTheme,
}) => {
  const handleToggleEvent = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const setBodyBackground = () => {
      if (theme === 'light') {
        document.body.className = 'bg-light-background';
      } else document.body.className = 'bg-dark-background';
    };
    setBodyBackground();
  }, [theme]);

  return (
    <button className={className} type="button" onClick={handleToggleEvent}>
      <img
        src={theme === 'light' ? LightModeSvg : DarkModeSvg}
        alt="Theme"
        className={`w-${size} h-${size}`}
      />
    </button>
  );
};

export default ThemeButton;
