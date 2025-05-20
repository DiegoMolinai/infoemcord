import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const AnimatedDecoration = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    if (wheelRef.current) {
      animate(wheelRef.current, {
        rotate: {
          from: '0deg',
          to: '360deg',
        },
        duration: 2000,
        easing: 'linear',
        loop: true,
      });
    }
  }, []);

  return (
    <div
      ref={wheelRef}
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '6px solid #555',
        borderTop: '6px solid #f57c00', // naranja como acento
        margin: '0 auto 1rem auto',
      }}
    ></div>
  );
};

export default AnimatedDecoration;
