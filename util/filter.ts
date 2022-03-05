import { UserPreview } from "../types";

export const filterUsersByName = (users: UserPreview[], text: string) => {
  const filteredUsers = users.filter((user) => {
    const name = `${user.title} ${user.firstName} ${user.lastName}`.toLowerCase();
    return name.includes(text.toLowerCase());
  });
  return filteredUsers;
};
