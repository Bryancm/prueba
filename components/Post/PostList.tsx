import type { FC } from "react";
import { PostsResponse } from "../../types";
import PostItem from "./PostItem";

interface Props {
  postsResponse: PostsResponse;
}

const PostList: FC<Props> = ({ postsResponse }) => {
  const existPosts = postsResponse.data.length > 0;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center sm:max-w-4xl flex-wrap sm:p-4">
        {existPosts && postsResponse.data.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostList;
