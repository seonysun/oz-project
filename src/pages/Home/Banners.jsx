import { useEffect, useState } from 'react';
import DesktopBanner from '../../components/Banner/DesktopBanner';
import MobileBanner from '../../components/Banner/MobileBanner';

function Banners() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileBanner /> : <DesktopBanner />;
}

export default Banners;
