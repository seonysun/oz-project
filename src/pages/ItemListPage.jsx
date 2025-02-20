import { PhonesB } from '../assets/icons/index';
import Button from '../components/Button/Button';
import CategoryCard from '../components/Card/CategoryCard';
import DropdownInput from '../components/Input/DropdownInput';
import FilterInput from '../components/Input/FilterInput';

function ItemListPage() {
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
    <div className="m-4 flex-col items-center space-y-4">
      <Button color="black" size="large" icon={false} text="Buy Now" />
      <div className="flex gap-4">
        <FilterInput />
        <DropdownInput />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {categoryCardList.map((card) => (
          <CategoryCard key={card.name} src={card.src} name={card.name} />
        ))}
      </div>
    </div>
  );
}

export default ItemListPage;
