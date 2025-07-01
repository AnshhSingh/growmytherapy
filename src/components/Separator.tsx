import React from 'react';
// this component was copied from one of my projects! you can pass the various props to customize the separator
interface SeparatorProps {
  className?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
  opacity?: string;
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '',
  color = '#7E7E6B',
  width = 'full',
  maxWidth = 'max-w-7xl',
  opacity = 'opacity-70'
}) => {
  return (
    <div className={`w-full my-8 ${className}`}>
      <div 
        className={`border-t border-${color} w-${width} ${maxWidth} mx-auto ${opacity}`} 
        style={{ borderTopWidth: '2px' }} 
      />
    </div>
  );
};

export default Separator;
