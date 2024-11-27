import {
  CommentBody,
  CommentEmail,
  CommentLine,
  CommentListWrapper,
  CommentName,
  CommentWrapper,
} from './comment-list-styled';

export const CommentList = ({
  comments,
}: {
  comments: { id: number; name: string; body: string; email: string }[];
}) => {
  return (
    <CommentListWrapper>
      {comments.map((comment) => (
        <CommentWrapper key={comment.id}>
          <div>
            <CommentName>{comment.name}</CommentName>
            <CommentLine>|</CommentLine>
            <CommentEmail>{comment.email}</CommentEmail>
          </div>

          <CommentBody>{comment.body}</CommentBody>
        </CommentWrapper>
      ))}
    </CommentListWrapper>
  );
};
