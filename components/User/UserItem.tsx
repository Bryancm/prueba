import { FC } from "react";
import Image from "next/image";
import { UserPreview } from "../../types";
import { capitalize } from "../../util/string";

interface Props {
  goToUserProfile: (href: string) => void;
  user: UserPreview;
}

const UserItem: FC<Props> = ({ goToUserProfile, user }) => {
  const name = capitalize(`${user.title} ${user.firstName} ${user.lastName}`);
  const onClick = () => {
    goToUserProfile(`/user/${user.id}`);
  };

  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center border rounded-md w-80 h-80 sm:w-60 sm:h-60 m-4 transition ease-out duration-500 hover:shadow-lg hover:border-yellow-500">
      <Image className="rounded-full" layout="fixed" src={user.picture} width={120} height={120} quality={100} />
      <div className="m-2 text-center">
        <h1 className="font-bold m-1 text-gray-800 text-lg sm:text-md">{name}</h1>
        <p className="text-gray-400 text-md sm:text-sm">{user.id}</p>
      </div>
    </button>
  );
};

export default UserItem;
