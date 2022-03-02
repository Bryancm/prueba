import type { FC } from "react";
import UserItem from "./UserItem";

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // array para maquetar

const UserList: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold m-4">People</h1>
      <div className="flex flex-row justify-center max-w-6xl flex-wrap p-4">
        {users.map((user) => (
          <UserItem key={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
