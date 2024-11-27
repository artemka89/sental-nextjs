import { CommentList } from '@/features/comment-list';
import { PostDetail } from '@/features/post-detail';

import { getPostDetails } from '@/shared/api/get-post-details';

import { Container } from '@/shared/ui/layouts/container';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostDetails(params.id);

  if (!post) return null;

  return (
    <Container>
      <PostDetail {...post} />
      <h2>Comments</h2>
      <CommentList comments={post.comments} />
    </Container>
  );
}
