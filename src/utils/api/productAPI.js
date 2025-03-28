import { instance } from './instance';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.LIST.PRODUCTS;

const productAPI = {
  infiniteList: async ({ pageParam = 0, limit = LIMIT }) => {
    const { data } = await instance.get(
      `products?offset=${pageParam}&limit=${limit}`,
    );
    return data;
  },
};

export default productAPI;
