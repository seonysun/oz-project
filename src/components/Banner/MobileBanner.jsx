import airpods from '../../assets/images/mobile/airpods.png';
import iphone from '../../assets/images/mobile/iphone.png';
import macbook from '../../assets/images/mobile/macbook.png';
import playstation from '../../assets/images/mobile/playstation.png';
import vision from '../../assets/images/mobile/vision.png';

function MobileBanner() {
  return (
    <section className="flex-col">
      <img src={iphone} alt="Banner" />
      <img src={airpods} alt="Banner" />
      <img src={vision} alt="Banner" />
      <img src={playstation} alt="Banner" />
      <img src={macbook} alt="Banner" />
    </section>
  );
}

export default MobileBanner;
