/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import postOptions from '../../utils/api/postOptions';

function User() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(postOptions.getpostList());

  const updateViews = useMutation({
    mutationFn: async ({ postId, currentViews }) =>
      postOptions.updateViews(postId, currentViews),
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(['posts'], (oldPosts) =>
        oldPosts.map((post) =>
          post.id === updatedPost.id
            ? { ...post, views: updatedPost.views }
            : post,
        ),
      );
    },
  });

  return (
    <div className="my-4 space-y-4 px-[10%] md:flex md:flex-wrap">
      {isLoading ? (
        <div>채팅방 찾는 중...</div>
      ) : (
        data?.map((post) => (
          <div
            key={post.id}
            onClick={() =>
              updateViews.mutate({ postId: post.id, currentViews: post.views })
            }
            className="rounded-lg p-6 shadow-lg hover:cursor-pointer md:w-1/2"
          >
            <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
            <div className="mb-4 line-clamp-1 flex justify-between">
              {post.content}
              <span>
                👀 {post.views} ♥️ {post.likes}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default User;
