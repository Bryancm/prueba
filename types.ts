export type Location = {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
};

export type UserPreview = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: Location;
  updatedDate: string;
};

export type Post = {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: string;
  owner: UserPreview;
};

export type UsersResponse = { data: UserPreview[]; total: number; page: number; limit: number };
export type PostsResponse = { data: Post[]; total: number; page: number; limit: number };
