import {
  Airpods,
  Iphone,
  Macbook,
  Playstation,
  Vision,
} from '../../assets/images/mobile/index';

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

export default MobileBanner;
