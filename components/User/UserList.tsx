import type { FC } from "react";
import { UsersResponse } from "../../types";
import SearchInput from "../Input/SearchInput";
import UserItem from "./UserItem";

interface Props {
  goToUserProfile: (href: string) => void;
  usersResponse: UsersResponse;
}

const UserList: FC<Props> = ({ goToUserProfile, usersResponse }) => {
  const areUsers = usersResponse.data.length > 0;
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchInput />
      <div className="flex flex-row justify-center items-center w-full sm:max-w-6xl flex-wrap sm:p-4">
        {!areUsers && (
          <div className="flex justify-center items-center h-96">
            <h1 className="text-gray-800 text-2xl font-bold">Users Not Found</h1>
          </div>
        )}
        {areUsers && usersResponse.data.map((user) => <UserItem key={user.id} user={user} goToUserProfile={goToUserProfile} />)}
      </div>
    </div>
  );
};

export default UserList;
