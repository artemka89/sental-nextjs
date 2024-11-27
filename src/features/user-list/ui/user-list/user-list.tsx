import { UserListItem } from '../user-list-item/user-list-item';
import { UserListWrapper, UserItemsList } from './user-list-styled';

export const UserList = ({
  users,
}: {
  users: { id: number; name: string; email: string }[];
}) => {
  return (
    <UserListWrapper>
      <UserItemsList>
        {users.map((user) => (
          <UserListItem key={user.id} {...user} />
        ))}
      </UserItemsList>
    </UserListWrapper>
  );
};
