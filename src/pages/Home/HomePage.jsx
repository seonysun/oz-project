import Banners from './Banners';
import BigCategories from './BigCategories';
import Categories from './Categories';
import Products from './Products';
import SaleBanner from './SaleBanner';

function HomePage() {
  return (
    <>
      <Banners />
      <Categories />
      <Products />
      <BigCategories />
      <SaleBanner />
    </>
  );
}

export default HomePage;
