import {
  Airpods,
  Iphone,
  Macbook,
  Playstation,
  Vision,
} from '../../assets/images/desktop';

function DesktopBanner() {
  return (
    <section>
      <div>
        <img src={Iphone} alt="banner" />
      </div>
      <div className="flex">
        <div className="flex-col">
          <img src={Playstation} alt="banner" />
          <div className="flex w-full">
            <img src={Airpods} alt="banner" className="w-1/2" />
            <img src={Vision} alt="banner" className="w-1/2" />
          </div>
        </div>
        <div>
          <img src={Macbook} alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default DesktopBanner;
