import { useParams } from 'react-router-dom';
import { ArrowLeft } from '../../assets/icons';
import ProductCards from '../../components/Card/ProductCards';
import SearchFilter from '../../components/Filter/SearchFilter';
import DropdownInput from '../../components/Input/DropdownInput';
import FilterInput from '../../components/Input/FilterInput';
import useData from '../../hooks/useData';
import useResize from '../../hooks/useResize';

const CATEGORY_MAP = {
  phones: 1,
  computers: 2,
  'smart watches': 3,
  cameras: 4,
  headphones: 5,
  gaming: 6,
};
const FILTER_ITEM = [
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
    items: [
      { id: 4, name: 'Apple' },
      { id: 5, name: 'Banana' },
      { id: 6, name: 'Cheese' },
      { id: 7, name: 'Dried Mango' },
      { id: 8, name: 'Egg' },
    ],
  },
  {
    title: 'Screen type',
    items: [{ id: 9, name: 'Orange' }],
  },
];

function MenuTabs({ category }) {
  return (
    <nav className="flex items-center gap-5 p-3 font-medium text-[#a2a1a1]">
      <span>Home</span>
      <img src={ArrowLeft} alt="arrow" className="size-4" />
      <span>Catalog</span>
      <img src={ArrowLeft} alt="arrow" className="size-4" />
      <span className="font-semibold text-black">{category}</span>
    </nav>
  );
}

function ItemListPage() {
  const isMobile = useResize();

  const { category } = useParams();
  const url = category ? `categories/${CATEGORY_MAP[category]}/products` : null;
  const { data = [], loading } = useData(url, { limit: 12, offset: 0 });

  return (
    <div className="my-4 space-y-4 px-[10%]">
      {!isMobile && <MenuTabs category={category} />}
      <div className="flex gap-4">
        {!isMobile && (
          <ul>
            {FILTER_ITEM.map((filterItem, idx) => (
              <li key={filterItem.title}>
                <SearchFilter filterItem={filterItem} firstFilter={idx === 0} />
              </li>
            ))}
          </ul>
        )}
        <section className="flex w-full">
          <div className="mb-6 flex justify-between">
            {isMobile ? (
              <FilterInput />
            ) : (
              <p className="my-auto mb-2 text-[#a2a1a1]">
                Selected Products :{' '}
                <span className="text-black">{data && data.length}</span>
              </p>
            )}
            <DropdownInput text="By rating" />
          </div>
          <ProductCards data={data} loading={loading} />
        </section>
      </div>
    </div>
  );
}

export default ItemListPage;
