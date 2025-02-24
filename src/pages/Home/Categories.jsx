/* eslint-disable react/no-array-index-key */
import { ArrowLeft, ArrowRight, PhonesB } from '../../assets/icons';
import CategoryCard from '../../components/Card/CategoryCard';

function Categories() {
  const categoryCardList = [
    { src: PhonesB, name: 'phones' },
    { src: PhonesB, name: 'cameras' },
    { src: PhonesB, name: 'watches' },
    { src: PhonesB, name: 'gaming' },
  ];
  const updatedList = () => {
    const preparing = Array.from(
      { length: 6 - categoryCardList.length },
      () => ({
        src: '',
        name: '준비중',
      }),
    );
    return [...categoryCardList, ...preparing];
  };

  return (
    <section className="bg-[#FAFAFA] px-2 py-12 sm:px-[8%] md:px-[60px]">
      <div className="mb-8 flex items-center justify-between px-[5%]">
        <span className="text-xl font-medium">Browse By Category</span>
        <div className="flex gap-4">
          <button type="button">
            <img src={ArrowRight} alt="before" />
          </button>
          <button type="button">
            <img src={ArrowLeft} alt="next" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {updatedList().map((card, idx) => (
          <CategoryCard key={idx} src={card.src} name={card.name} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
