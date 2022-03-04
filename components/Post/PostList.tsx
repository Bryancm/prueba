import type { FC } from "react";
import PostItem from "./PostItem";

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // array para maquetar

const PostList: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center sm:max-w-4xl flex-wrap sm:p-4">
        {posts.map((post) => (
          <PostItem key={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
