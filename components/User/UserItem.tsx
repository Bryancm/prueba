import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const UserItem: FC = () => {
  return (
    <Link href="/user/1">
      <div className="flex flex-col justify-center items-center border rounded-md w-60 h-60 m-4 cursor-pointer">
        <Image
          className="rounded-full"
          layout="fixed"
          src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
          width={120}
          height={120}
        />
        <div className="m-2 text-center">
          <h1 className="font-bold m-1">Mr. Rudi Droste</h1>
          <p className="text-gray-400 text-sm">60d0fe4f5311236168a109ce</p>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
