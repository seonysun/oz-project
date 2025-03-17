/* eslint-disable react/no-array-index-key */
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import CategoryCard from '../../components/Card/CategoryCard';
import { MAX_LIST_LENGTH, CATEGORY_LIST } from '../../constants/uiData';

function Categories() {
  const updatedList = [
    ...CATEGORY_LIST,
    ...Array.from(
      { length: MAX_LIST_LENGTH.HOME.CATEGORY - CATEGORY_LIST.length },
      () => ({ src: '', name: '준비중' }),
    ),
  ];

  return (
    <section className="bg-[#FAFAFA] px-2 py-12 sm:px-[8%] md:px-[80px]">
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
        {updatedList.map((card, idx) => (
          <CategoryCard key={idx} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
