import Banners from './Banners';
import BigCategories from './BigCategories';
import Categories from './Categories';
import Products from './Products';
import { DSale } from '../../assets/images/desktop';
import { Sale } from '../../assets/images/mobile';
import useResize from '../../hooks/useResize';

function HomePage() {
  const isMobile = useResize();

  return (
    <>
      <Banners />
      <Categories />
      <Products />
      <BigCategories />
      <section className="w-full">
        <img src={isMobile ? Sale : DSale} alt="sale" className="w-full" />
      </section>
    </>
  );
}

export default HomePage;
