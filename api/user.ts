import fetcher from "./fetch";
const baseUrl = "https://dummyapi.io/data/v1/user";

export const fetchUsers = async () => {
  const res = await fetcher(`${baseUrl}?limit=12`);
  return res.json();
};

export const fetchUserProfile = async (id: string | string[] | undefined) => {
  const res = await fetcher(`${baseUrl}/${id}`);
  return res.json();
};

export const fetchUserPosts = async (id: string | string[] | undefined) => {
  const res = await fetcher(`${baseUrl}/${id}/post?limit=12`);
  return res.json();
};
