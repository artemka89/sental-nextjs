'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const PostWrapper = styled.li`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid hsl(var(--border-color));
  background-color: transparent;
`;

export const PostTitle = styled.div`
  font-size: var(--font-lg);
  font-weight: 600;
  margin-bottom: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PostBody = styled.div`
  font-size: var(--font-md);
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const CommentsLink = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: var(--font-sm);
  text-decoration: none;
  background-color: hsl(var(--card-hover-color));
  color: inherit;
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
      background-color: hsl(var(--card-hover-color));
      & span {
        opacity: 1;
      }
    }
  }
`;
