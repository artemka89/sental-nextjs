import { PostItem } from '../post-item/post-item';
import { PostListWrapper } from './post-list-styled';

export const PostList = ({
  posts,
}: {
  posts: { id: number; title: string; body: string }[];
}) => {
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </PostListWrapper>
  );
};
