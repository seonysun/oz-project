import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { DEVICE } from '../constants/uiData';

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = debounce(() => {
    setIsMobile(window.innerWidth < DEVICE.tablet);
  }, 300);

  useEffect(() => {
    setIsMobile(window.innerWidth < DEVICE.tablet);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useResize;
