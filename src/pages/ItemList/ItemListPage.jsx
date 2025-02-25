import { useParams } from 'react-router-dom';
import ListProducts from './ListProducts';
import { ArrowLeft } from '../../assets/icons';
import SearchFilter from '../../components/Filter/SearchFilter';
import DropdownInput from '../../components/Input/DropdownInput';

function ItemListPage() {
  const { category } = useParams();
  const filterItemList = [
    {
      title: 'Brand',
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Xiaomi' },
        { id: 3, name: 'Poco' },
      ],
    },
    {
      title: 'Battery capacity',
      items: [{ id: 4, name: 'Apple' }],
    },
    {
      title: 'Screen type',
      items: [{ id: 5, name: 'Apple' }],
    },
  ];

  return (
    <div className="my-4 flex-col items-center space-y-4 sm:px-[10%]">
      <nav className="flex items-center gap-5 p-3 text-[#a2a1a1]">
        <span>Home</span>
        <img src={ArrowLeft} alt="arrow" className="size-4" />
        <span>Catalog</span>
        <img src={ArrowLeft} alt="arrow" className="size-4" />
        <span className="text-black">{category}</span>
      </nav>
      <div className="flex gap-4">
        <ul>
          {filterItemList.map((filterItem, idx) => (
            <li key={filterItem.title}>
              <SearchFilter filterItem={filterItem} firstFilter={idx === 0} />
            </li>
          ))}
        </ul>
        <section className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[#a2a1a1]">
              Selected Products : <span className="text-black">85</span>
            </p>
            <DropdownInput text="By rating" />
          </div>
          <ListProducts />
        </section>
      </div>
    </div>
  );
}

export default ItemListPage;
