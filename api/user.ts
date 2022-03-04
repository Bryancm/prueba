import fetcher from "./fetch";
const baseUrl = "https://dummyapi.io/data/v1/useryy";

export const fetchUsers = async () => {
  const res = await fetcher(`${baseUrl}?limit=12`);
  return res.json();
};
