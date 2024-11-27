'use client';

import { getDisplayName } from '@/shared/lib/get-display-name';
import styled from 'styled-components';

type Size = 'small' | 'large';

export const UserAvatar = styled.div<{ size: Size }>`
  width: ${(props) => (props.size === 'large' ? '100px' : '50px')};
  height: ${(props) => (props.size === 'large' ? '100px' : '50px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.size === 'large' ? '48px' : '24px')};
  border: 2px solid hsl(0 0% 82%);
  border-radius: 50%;
  background-color: hsl(21 90.2% 39%);
  flex-shrink: 0;
  @media (max-width: 440px) {
    width: ${(props) => (props.size === 'large' ? '80px' : '50px')};
    height: ${(props) => (props.size === 'large' ? '80px' : '50px')};
    font-size: ${(props) => (props.size === 'large' ? '36px' : '24px')};
  }
`;

export const Avatar = ({
  name,
  size = 'small',
}: {
  name: string;
  size?: Size;
}) => {
  const displayName = getDisplayName(name);

  return <UserAvatar size={size}>{displayName}</UserAvatar>;
};
