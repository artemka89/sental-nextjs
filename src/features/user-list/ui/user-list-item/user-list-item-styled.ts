'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const UserItemLink = styled(Link)`
  padding: 10px;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: inherit;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      background-color: hsl(var(--card-hover-color));
    }
  }
`;

export const UserItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const UserItemName = styled.div`
  font-size: var(--font-lg);
  font-weight: 500;
`;

export const UserItemEmail = styled.div`
  font-size: var(--font-sm);
  font-weight: 400;
  color: hsl(var(--secondary--color));
`;
