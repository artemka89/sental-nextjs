import { UserList } from '@/features/user-list';
import { getUsers } from '@/shared/api/get-users';

export default async function UserListPage() {
  const users = await getUsers();

  return <UserList users={users} />;
}
