import fetcher from "./fetch";
const baseUrl = "https://dummyapi.io/data/v1/user";

export const fetchUsers = async (page: number, limit: number) => {
  const res = await fetcher(`${baseUrl}?page=${page}&limit=${limit}`);
  return res.json();
};

export const fetchUserProfile = async (id: string | string[] | undefined) => {
  const res = await fetcher(`${baseUrl}/${id}`);
  return res.json();
};

export const fetchUserPosts = async (page: number, limit: number, id: string | string[] | undefined) => {
  const res = await fetcher(`${baseUrl}/${id}/post?page=${page}&limit=${limit}`);
  return res.json();
};
