import { UserDetails } from '@/features/user-detail';

import { PostList } from '@/features/post-list';
import { getUserDetails } from '@/shared/api/get-user-details';

export default async function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUserDetails(params.id);

  if (!user) return null;

  return (
    <>
      <UserDetails {...user} />
      <h2>Posts</h2>
      <PostList posts={user.posts} />
    </>
  );
}
