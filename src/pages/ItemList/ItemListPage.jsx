import { useParams } from 'react-router-dom';
import InfiniteList from './InfiniteList';
import { ArrowLeft } from '../../assets/icons';
import SearchFilter from '../../components/Filter/SearchFilter';
import { FILTER_LIST } from '../../constants/uiData';
import useResize from '../../hooks/useResize';

function ItemListPage() {
  const isMobile = useResize();

  const { category } = useParams();

  return (
    <div className="my-4 space-y-4 px-[10%]">
      {!isMobile && <MenuTabs category={category} />}
      <div className="flex gap-4">
        {!isMobile && <FilterSidebar size="w-[256px] flex-none" />}
        <section className="flex w-full flex-col">
          <InfiniteList />
        </section>
      </div>
    </div>
  );
}

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

function FilterSidebar({ size }) {
  return (
    <ul className={`${size}`}>
      {FILTER_LIST.map((filterItem, idx) => (
        <li key={filterItem.title}>
          <SearchFilter filterItem={filterItem} firstFilter={idx === 0} />
        </li>
      ))}
    </ul>
  );
}

export default ItemListPage;
