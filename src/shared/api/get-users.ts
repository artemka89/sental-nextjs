import { API_URL } from '../config';
import { UserDto } from './types';

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users: UserDto[] = await response.json();

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};