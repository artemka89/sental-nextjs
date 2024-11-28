import { API_URL } from '../config';
import { PostDto, UserDetailsDto } from './types';

export const getUserDetails = async (id: string) => {
  try {
    const userResponse = await fetch(`${API_URL}/users/${id}`, {
      next: {
        revalidate: 60 * 1000 * 5,
      },
    });
    const user: UserDetailsDto = await userResponse.json();

    const postsResponse = await fetch(`${API_URL}/users/${id}/posts`, {
      next: {
        revalidate: 60 * 1000 * 5,
      },
    });
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
