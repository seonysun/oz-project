import axios from 'axios';

const postAPI = {
  postList: async () => {
    const { data } = await axios.get('/msw/posts');
    return data;
  },
};

const postOptions = {
  getpostList: () => ({
    queryKey: ['posts'],
    queryFn: postAPI.postList,
  }),
};

export default postOptions;
