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
  border: 1px solid hsl(0 0% 30%);
  background-color: transparent;
`;

export const CommentName = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const CommentEmail = styled.span`
  font-size: 14px;
  opacity: 0.6;
`;

export const CommentLine = styled.span`
  margin: 0 10px;
`;

export const CommentBody = styled.div`
  margin-top: 10px;
  font-size: 16px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
