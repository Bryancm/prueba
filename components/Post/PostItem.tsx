import type { FC } from "react";
import Image from "next/image";
import Tag from "../Tag";
import { HeartIcon } from "@heroicons/react/outline";

const tags = ["animal", "dog", "golden retriever"]; //array para maquetar

const PostItem: FC = () => {
  return (
    <div className="flex flex-col border rounded-md w-11/12 sm:w-3/4 m-4 pt-4 px-4 pb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Image
            className="rounded-full"
            layout="fixed"
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            width={60}
            height={60}
          />
          <div className="mx-2">
            <h1 className="font-bold text-sm sm:text-md">Mr. Rudi Droste</h1>
            <p className="text-gray-400 text-xs sm:text-sm">60d0fe4f5311236168a109ce</p>
          </div>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm text-right w-1/4">May 24 2020 09:53:17</p>
      </div>
      <p className="text-gray-700 py-4 leading-relaxed">Gratitude short-coated tan dog on seashore</p>
      <div className="flex justify-center items-center p-2 relative h-80 sm:h-96">
        <Image
          className="rounded cursor-pointer"
          objectFit="cover"
          layout="fill"
          src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
        />
      </div>
      <div className="flex flex-row justify-between items-center pt-4">
        <div className="flex flex-row flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <button className="flex flex-row items-center text-red-600 transition ease-in duration-200 hover:text-red-500 hover:scale-110">
          <HeartIcon className="h-6 w-6  mr-2" />
          <p className="text-sm">46</p>
        </button>
      </div>
    </div>
  );
};

export default PostItem;
