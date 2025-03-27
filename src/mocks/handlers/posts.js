import { delay, http, HttpResponse } from 'msw';
import { posts } from '../datas/posts';

const postHandler = [
  // 게시글 목록 가져오기
  http.get('/msw/posts', async () => {
    await delay(1000);
    return HttpResponse.json(posts, { status: 200 });
  }),
];

export default postHandler;
