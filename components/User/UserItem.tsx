import { FC } from "react";
import Image from "next/image";
import { UserPreview } from "../../types";
import { capitalize } from "../../util/string";
import { toBase64, shimmer } from "../../util/placeholder";

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
      aria-label={`View profile of ${name}`}
      onClick={onClick}
      className="flex flex-col justify-center items-center border rounded-md w-full h-80 sm:w-60 sm:h-60 m-4 transition ease-out duration-500 hover:shadow-lg hover:border-yellow-500">
      <Image
        aria-label={`Profile picture of ${name}`}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(120, 120))}`}
        className="rounded-full"
        layout="fixed"
        src={user.picture}
        width={120}
        height={120}
        quality={100}
        alt={`user ${name}`}
      />
      <div className="m-2 text-center">
        <h1 aria-label={`${name}`} className="font-bold m-1 text-gray-800 text-lg sm:text-md">
          {name}
        </h1>
        <p className="text-gray-400 text-md sm:text-sm">{user.id}</p>
      </div>
    </button>
  );
};

export default UserItem;
