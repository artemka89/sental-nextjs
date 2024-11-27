'use client';

import {
  UserItemInfoWrapper,
  UserItemName,
  UserItemEmail,
  UserItemLink,
} from './user-list-item-styled';
import { Avatar } from '@/shared/ui/avatar';

export const UserListItem = ({
  id,
  name,
  email,
}: {
  id: number;
  name: string;
  email: string;
}) => {
  return (
    <li>
      <UserItemLink href={`/users/${id}`}>
        <Avatar name={name} />
        <UserItemInfoWrapper>
          <UserItemName>{name}</UserItemName>
          <UserItemEmail>{email}</UserItemEmail>
        </UserItemInfoWrapper>
      </UserItemLink>
    </li>
  );
};
