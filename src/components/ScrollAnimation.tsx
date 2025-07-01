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
    // Function to check if element is in viewport
    const checkIfInView = () => {
      if (elementRef.current) {
        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Element is in view if it's top is below the top of the viewport
        // and its bottom is above the bottom of the viewport
        const isInView = 
          rect.top <= windowHeight * 0.85 && // Only reveal when element is 85% into the viewport
          rect.bottom >= 0;
        
        if (isInView) {
          element.classList.add('fadeIn');
        }
      }
    };

    // Add event listener
    window.addEventListener('scroll', checkIfInView);
    
    // Check on initial render
    setTimeout(checkIfInView, 100);

    // Clean up
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
