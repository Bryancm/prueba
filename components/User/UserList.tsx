import type { FC } from "react";
import { UserPreview } from "../../types";
import SearchInput from "../Input/SearchInput";
import UserItem from "./UserItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePagination } from "../../hooks/usePagination";
import { fetchUsers } from "../../api/user";
import Spinner from "../Spinner";

interface Props {
  goToUserProfile: (href: string) => void;
  users: UserPreview[];
}

const UserList: FC<Props> = ({ goToUserProfile, users }) => {
  const { nextPage, hasMore, data } = usePagination(fetchUsers, users);
  const usersData = data as UserPreview[];
  const usersExist = users.length > 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <SearchInput />
      {!usersExist && (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-gray-800 text-2xl font-bold">Users Not Found</h1>
        </div>
      )}
      {usersExist && (
        <InfiniteScroll
          className="flex flex-row justify-center items-center w-full sm:max-w-6xl flex-wrap sm:p-4"
          dataLength={usersData.length}
          next={nextPage}
          hasMore={hasMore}
          loader={
            <div className="w-full flex items-center justify-center">
              <Spinner />
            </div>
          }
          endMessage={<p className="w-full text-center text-gray-800 text-2xl font-bold p-4">Yay! You have seen it all</p>}>
          {usersData.map((user) => (
            <UserItem key={user.id} user={user} goToUserProfile={goToUserProfile} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default UserList;
