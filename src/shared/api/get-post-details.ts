import { API_URL } from '../config';
import { CommentDto, PostDto } from './types';

export const getPostDetails = async (id: string) => {
  try {
    const postResponse = await fetch(`${API_URL}/posts/${id}`);
    const post: PostDto = await postResponse.json();

    const commentsResponse = await fetch(`${API_URL}/posts/${id}/comments`);
    const comments: CommentDto[] = await commentsResponse.json();

    const postDetails = {
      ...post,
      comments,
    };

    return postDetails;
  } catch (error) {
    console.log(error);
  }
};
