'use client';
import styled from 'styled-components';

export const CommentListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CommentWrapper = styled.li`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid hsl(var(--border-color));
  background-color: transparent;
`;

export const CommentName = styled.p`
  display: inline-block;
  font-weight: 500;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const CommentEmail = styled.span`
  font-size: var(--font-sm);
  opacity: 0.6;
`;

export const CommentLine = styled.span`
  margin: 0 10px;
  opacity: 0.6;
`;

export const CommentBody = styled.p`
  margin-top: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
