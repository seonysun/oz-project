import { useInfiniteQuery } from '@tanstack/react-query';
import ProductCards from '../../components/Card/ProductCards';
import DropdownInput from '../../components/Input/DropdownInput';
import FilterInput from '../../components/Input/FilterInput';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useResize from '../../hooks/useResize';
import productOptions from '../../utils/api/productOptions';

function InfiniteList() {
  const isMobile = useResize();

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(productOptions.infiniteList());

  const observerRef = useIntersectionObserver({ hasNextPage, fetchNextPage });

  return (
    <>
      <div className="mb-6 flex justify-between">
        {isMobile && <FilterInput size="w-[200px]" />}
        <DropdownInput size="w-[200px]" text="By rating" />
      </div>
      <ProductCards
        data={data?.pages.flat()}
        loading={isLoading}
        fetching={isFetchingNextPage}
      />
      <div ref={observerRef} className="h-3" />
    </>
  );
}

export default InfiniteList;
