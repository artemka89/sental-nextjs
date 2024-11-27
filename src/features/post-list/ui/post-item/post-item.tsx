'use client';

import {
  CommentsLink,
  PostBody,
  PostTitle,
  PostWrapper,
} from './post-item-styled';

export const PostItem = ({
  id,
  title,
  body,
}: {
  id: number;
  title: string;
  body: string;
}) => {
  return (
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <CommentsLink href={`/posts/${id}`}>
          <span>Check details {'>>>'}</span>
        </CommentsLink>
      </div>
    </PostWrapper>
  );
};
