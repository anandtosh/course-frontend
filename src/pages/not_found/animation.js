import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Animated404 = () => {
  const { xyz, opacity } = useSpring({
    from: { xyz: [0, 0, 0], opacity: 0 },
    to: async (next) => {
      while (true) {
        await next({ xyz: [0, 20, 0], opacity: 1 });
        await next({ xyz: [0, -20, 0], opacity: 1 });
      }
    },
    config: { duration: 1500 },
    reset: true,
  });

  return (
    <animated.div
      style={{
        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
        opacity,
      }}
    >
      <h1 style={{ fontSize: '150px', fontWeight: 'bold',color:'#ffffff' }}>404</h1>
    </animated.div>
  );
};

export default Animated404;
