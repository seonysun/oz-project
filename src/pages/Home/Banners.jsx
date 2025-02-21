import { useEffect, useState } from 'react';
import {
  DAirpods,
  DIphone,
  DMacbook,
  DPlaystation,
  DVision,
} from '../../assets/images/desktop';
import {
  Airpods,
  Iphone,
  Macbook,
  Playstation,
  Vision,
} from '../../assets/images/mobile';

function MobileBanner() {
  return (
    <section className="flex-col">
      <img src={Iphone} alt="banner" />
      <img src={Airpods} alt="banner" />
      <img src={Vision} alt="banner" />
      <img src={Playstation} alt="banner" />
      <img src={Macbook} alt="banner" />
    </section>
  );
}

function DesktopBanner() {
  return (
    <section>
      <div>
        <img src={DIphone} alt="banner" />
      </div>
      <div className="flex">
        <div className="flex-col">
          <img src={DPlaystation} alt="banner" />
          <div className="flex w-full">
            <img src={DAirpods} alt="banner" className="w-1/2" />
            <img src={DVision} alt="banner" className="w-1/2" />
          </div>
        </div>
        <div>
          <img src={DMacbook} alt="banner" />
        </div>
      </div>
    </section>
  );
}

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
