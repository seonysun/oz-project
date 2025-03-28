import productAPI from './productAPI';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.LIST.PRODUCTS;

const productOptions = {
  infiniteList: () => ({
    queryKey: ['products', 'infinite'],
    queryFn: ({ pageParam = 0 }) =>
      productAPI.infiniteList({ pageParam, limit: LIMIT }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === LIMIT ? allPages.length * LIMIT : undefined,
  }),
};

export default productOptions;
