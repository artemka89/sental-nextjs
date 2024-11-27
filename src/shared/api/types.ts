export interface UserDto {
  id: number;
  name: string;
  email: string;
}

export interface UserDetailsDto {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
  website: string;
}

export interface PostDto {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface CommentDto {
  id: number;
  name: string;
  body: string;
  email: string;
}
