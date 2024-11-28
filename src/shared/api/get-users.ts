import { API_URL } from '../config';
import { UserDto } from './types';

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      next: {
        revalidate: 60 * 1000 * 5,
      },
    });
    const users: UserDto[] = await response.json();

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};
