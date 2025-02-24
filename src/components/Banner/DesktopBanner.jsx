import airpods from '../../assets/images/desktop/airpods.png';
import iphone from '../../assets/images/desktop/iphone.png';
import macbook from '../../assets/images/desktop/macbook.png';
import playstation from '../../assets/images/desktop/playstation.png';
import vision from '../../assets/images/desktop/vision.png';

function DesktopBanner() {
  return (
    <section>
      <div>
        <img src={iphone} alt="Banner" />
      </div>
      <div className="flex">
        <div className="flex-col">
          <img src={playstation} alt="Banner" />
          <div className="flex w-full">
            <img src={airpods} alt="Banner" className="w-1/2" />
            <img src={vision} alt="Banner" className="w-1/2" />
          </div>
        </div>
        <div>
          <img src={macbook} alt="Banner" />
        </div>
      </div>
    </section>
  );
}

export default DesktopBanner;
