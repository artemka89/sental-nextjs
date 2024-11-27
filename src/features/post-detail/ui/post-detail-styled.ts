'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const PostDetailWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
  gap: 10px;
`;

export const PostTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PostBody = styled.div`
  font-size: 18px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const AuthorLink = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 14px;
  text-decoration: none;
  color: inherit;
  background-color: hsl(19 31% 16%);
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  & span {
    opacity: 0.7;
  }
  @media (hover: hover) {
    background-color: transparent;
    &:hover {
      background-color: hsl(19 31% 16%);
      & span {
        opacity: 1;
      }
    }
  }
`;
