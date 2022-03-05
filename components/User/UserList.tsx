import { ChangeEvent, FC, useState } from "react";
import { UserPreview } from "../../types";
import SearchInput from "../Input/SearchInput";
import UserItem from "./UserItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePagination } from "../../hooks/usePagination";
import { fetchUsers } from "../../api/user";
import Spinner from "../Spinner";
import { filterUsersByName } from "../../util/filter";

interface Props {
  goToUserProfile: (href: string) => void;
  users: UserPreview[];
}

const UserList: FC<Props> = ({ goToUserProfile, users }) => {
  const { nextPage, hasMore, error, data } = usePagination(fetchUsers, users);
  const [text, setText] = useState("");
  const usersData = data as UserPreview[];
  const usersExist = users.length > 0;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const filteredUsers = filterUsersByName(usersData, text);

  return (
    <div className="flex flex-col justify-center items-center">
      <SearchInput value={text} onChange={onChange} />
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
          endMessage={
            <p className="w-full text-center text-gray-800 text-2xl font-bold p-4">{error ? error : "Yay! You have seen it all"}</p>
          }>
          {filteredUsers.map((user) => (
            <UserItem key={user.id} user={user} goToUserProfile={goToUserProfile} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default UserList;
