import { useQuery } from '@tanstack/react-query';
import postOptions from '../../utils/api/postOptions';

function User() {
  const { data, isLoading } = useQuery(postOptions.getpostList());

  return (
    <div className="my-4 space-y-4 px-[10%]">
      {isLoading ? (
        <div>채팅방 찾는 중...</div>
      ) : (
        data?.map((post) => (
          <div
            key={post.id}
            className="rounded-lg p-6 shadow-lg transition-shadow hover:cursor-pointer"
          >
            <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
            <div className="mb-4 line-clamp-1 flex justify-between">
              {post.content}
              <span>
                👀 {post.views} ♥️ {post.likes}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default User;
