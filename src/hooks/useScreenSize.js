import { useState, useEffect } from 'react';

export default () => {
  const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const onResize = () => setScreenSize([window.innerWidth, window.innerHeight]);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return screenSize;
};
