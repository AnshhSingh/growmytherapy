'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

export default function ScrollAnimation({ children, delay = 0, className = '' }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const checkIfInView = () => {
      if (elementRef.current) {
        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        
        const isInView = 
          rect.top <= windowHeight * 0.85 && 
          rect.bottom >= 0;
        
        if (isInView) {
          element.classList.add('fadeIn');
        }
      }
    };

    window.addEventListener('scroll', checkIfInView);
    
  
    setTimeout(checkIfInView, 100);

   
    return () => {
      window.removeEventListener('scroll', checkIfInView);
    };
  }, []);

  return (
    <div 
      ref={elementRef} 
      className={`preFade delay-${delay} ${className}`}
    >
      {children}
    </div>
  );
}
