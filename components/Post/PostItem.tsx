import type { FC } from "react";
import Image from "next/image";
import Tag from "../Tag";
import { HeartIcon } from "@heroicons/react/outline";
import { Post } from "../../types";
import { capitalize } from "../../util/string";
import { formatPostDate } from "../../util/date";
import { toBase64, shimmer } from "../../util/placeholder";

interface Props {
  post: Post;
}

const PostItem: FC<Props> = ({ post }) => {
  const name = capitalize(`${post.owner.title} ${post.owner.firstName} ${post.owner.lastName}`);
  const date = formatPostDate(new Date(post.publishDate));

  return (
    <div className="flex flex-col border rounded-md w-11/12 sm:w-3/4 m-4 pt-4 px-4 pb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(60, 60))}`}
            className="rounded-full"
            layout="fixed"
            src={post.owner.picture}
            width={60}
            height={60}
            quality={100}
          />
          <div className="mx-2">
            <h1 className="font-bold text-gray-800 text-sm sm:text-md">{name}</h1>
            <p className="text-gray-400 text-xs sm:text-sm">{post.owner.id}</p>
          </div>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm text-right w-1/4">{date}</p>
      </div>
      <p className="text-gray-700 py-4 leading-relaxed">{post.text}</p>
      <a className="cursor-pointer flex justify-center items-center p-2 relative h-80 sm:h-96" href={post.image} target="_blank">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(384, 384))}`}
          className="rounded "
          objectFit="cover"
          layout="fill"
          src={post.image}
        />
      </a>
      <div className="flex flex-row justify-between items-center pt-4">
        <div className="flex flex-row flex-wrap">
          {post.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <button className="flex flex-row items-center text-red-600 transition ease-in duration-200 hover:text-red-500 hover:scale-110">
          <HeartIcon className="h-6 w-6  mr-2" />
          <p className="text-sm">{post.likes}</p>
        </button>
      </div>
    </div>
  );
};

export default PostItem;
