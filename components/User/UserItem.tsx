import { FC } from "react";
import Image from "next/image";

interface Props {
  goToUserProfile: (href: string) => void;
}

const UserItem: FC<Props> = ({ goToUserProfile }) => {
  const onClick = () => {
    goToUserProfile("/user/1");
  };

  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center border rounded-md w-80 h-80 sm:w-60 sm:h-60 m-4 transition ease-out duration-500 hover:shadow-lg hover:border-yellow-500">
      <Image
        className="rounded-full"
        layout="fixed"
        src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
        width={120}
        height={120}
      />
      <div className="m-2 text-center">
        <h1 className="font-bold m-1 text-lg sm:text-md">Mr. Rudi Droste</h1>
        <p className="text-gray-400 text-md sm:text-sm">60d0fe4f5311236168a109ce</p>
      </div>
    </button>
  );
};

export default UserItem;
