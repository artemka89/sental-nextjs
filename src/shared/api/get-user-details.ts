import { API_URL } from '../config';
import { PostDto, UserDetailsDto } from './types';

export const getUserDetails = async (id: string) => {
  try {
    const userResponse = await fetch(`${API_URL}/users/${id}`);
    const user: UserDetailsDto = await userResponse.json();

    const postsResponse = await fetch(`${API_URL}/users/${id}/posts`);
    const posts: PostDto[] = await postsResponse.json();

    const userDetails = {
      ...user,
      posts,
    };

    return userDetails;
  } catch (error) {
    console.log(error);
  }
};
