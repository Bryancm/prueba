import type { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchUserPosts } from "../../api/user";
import { usePagination } from "../../hooks/usePagination";
import { Post } from "../../types";
import PostItem from "./PostItem";
import Spinner from "../Spinner";

interface Props {
  userId: string;
  posts: Post[];
}

const PostList: FC<Props> = ({ posts, userId }) => {
  const { nextPage, hasMore, data } = usePagination(fetchUserPosts, posts, userId, 6);
  const postData = data as Post[];
  const existPosts = posts.length > 0;
  return (
    <div className="flex flex-col justify-center items-center">
      {existPosts && (
        <InfiniteScroll
          className="flex flex-row justify-center sm:max-w-4xl flex-wrap sm:p-4"
          dataLength={postData.length}
          next={nextPage}
          hasMore={hasMore}
          loader={
            <div className="w-full flex items-center justify-center">
              <Spinner />
            </div>
          }
          endMessage={<p className="w-full text-center text-gray-800 text-2xl font-bold p-4">Yay! You have seen it all</p>}>
          {postData.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default PostList;
