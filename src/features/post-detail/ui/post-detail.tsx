'use client';

import {
  AuthorLink,
  PostBody,
  PostDetailWrapper,
  PostTitle,
} from './post-detail-styled';

export const PostDetail = ({
  userId,
  title,
  body,
}: {
  userId: number;
  title: string;
  body: string;
}) => {
  return (
    <PostDetailWrapper>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
      <div>
        <AuthorLink href={`/users/${userId}`}>
          <span>Check Author</span>
        </AuthorLink>
      </div>
    </PostDetailWrapper>
  );
};
