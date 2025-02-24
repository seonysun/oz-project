import { Ts } from '../../assets/images/cards';
import BigCategoryCard from '../../components/Card/BigCategoryCard';

function BigCategories() {
  const colorList = [
    'bg-[#FFFFFF]',
    'bg-[#F9F9F9]',
    'bg-[#EAEAEA]',
    'bg-[#2C2C2C]',
  ];
  const itemList = [
    { src: Ts, name: 'Clothes' },
    { src: Ts, name: 'Electronics' },
    { src: Ts, name: 'Furniture' },
    { src: Ts, name: 'Shoes' },
  ];
  const updatedItemList = itemList.map((item, idx) => ({
    ...item,
    color: colorList[idx],
  }));

  return (
    <section className="hidden md:block">
      <div className="flex">
        {updatedItemList.map((item, idx) => (
          <BigCategoryCard
            key={item.name}
            idx={idx}
            color={item.color}
            src={item.src}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
}

export default BigCategories;
