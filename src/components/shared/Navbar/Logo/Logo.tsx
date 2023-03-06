import React from 'react';
import LogoSvg from '@/assets/healthy-food-icon.svg';

interface LogoProps {
  size: number;
  className : string;
}

const Logo: React.FC<LogoProps> = ({ size, className }) => (
  <div className={className}>
    <img src={LogoSvg} alt="Logo" className={`w-${size} h-${size}`} />
  </div>
);

export default Logo;
