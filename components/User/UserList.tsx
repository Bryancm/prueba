import type { FC } from "react";
import SearchInput from "../Input/SearchInput";
import UserItem from "./UserItem";

interface Props {
  goToUserProfile: (href: string) => void;
}

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // array para maquetar

const UserList: FC<Props> = ({ goToUserProfile }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchInput />
      <div className="flex flex-row justify-center items-center w-full sm:max-w-6xl flex-wrap sm:p-4">
        {users.map((user) => (
          <UserItem key={user} goToUserProfile={goToUserProfile} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
