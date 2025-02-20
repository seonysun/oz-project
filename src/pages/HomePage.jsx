/* eslint-disable react/no-array-index-key */
import { ArrowLeft, ArrowRight, PhonesB } from '../assets/icons/index';
import CategoryCard from '../components/Card/CategoryCard';
import Banners from '../layout/Banners';

function HomePage() {
  const categoryCardList = [
    { src: PhonesB, name: 'phones' },
    { src: PhonesB, name: 'cameras' },
    { src: PhonesB, name: 'watches' },
    { src: PhonesB, name: 'gaming' },
  ];
  while (categoryCardList.length < 6) {
    categoryCardList.push({ src: '', name: '준비중' });
  }

  return (
    <>
      <Banners />
      <section className="bg-[#FAFAFA] px-2 py-8 sm:px-[8%] md:px-[60px]">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xl font-medium">Browse By Category</span>
          <div className="flex gap-4">
            <img src={ArrowRight} alt="before" />
            <img src={ArrowLeft} alt="next" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {categoryCardList.map((card, idx) => (
            <CategoryCard key={idx} src={card.src} name={card.name} />
          ))}
        </div>
      </section>
      <div>Products</div>
    </>
  );
}

export default HomePage;
