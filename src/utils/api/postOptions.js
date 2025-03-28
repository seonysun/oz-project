import axios from 'axios';

const postAPI = {
  postList: async () => {
    const { data } = await axios.get('/msw/posts');
    return data;
  },
  updateView: async (postId, currentViews) => {
    const { data } = await axios.patch(`/msw/posts/${postId}/views`, {
      views: currentViews + 1,
    });
    return data;
  },
};

const postOptions = {
  getpostList: () => ({
    queryKey: ['posts'],
    queryFn: postAPI.postList,
  }),
  updateViews: (postId, currentViews) =>
    postAPI.updateView(postId, currentViews),
};

export default postOptions;
