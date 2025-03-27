import { delay, http, HttpResponse } from 'msw';
import { posts } from '../datas/posts';

const postHandler = [
  // 게시글 목록 가져오기
  http.get('/msw/posts', async () => {
    await delay(1000);
    return HttpResponse.json(posts, { status: 200 });
  }),

  // 조회수 증가
  http.patch('/msw/posts/:id/views', async ({ params }) => {
    const { id } = params;
    const postIndex = posts.findIndex((post) => post.id === id);

    posts[postIndex].views = (posts[postIndex].views || 0) + 1;

    await delay(1000);
    return HttpResponse.json(posts[postIndex], { status: 200 });
  }),
];

export default postHandler;
