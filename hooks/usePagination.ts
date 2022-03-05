import { useEffect, useState } from "react";
import { Post, UserPreview } from "../types";

//TODO: PAGINATION ERROR HANDLING, DEPLOYMENT, GITHUB README, CODE REVIEW

export const usePagination = (
  fetchData: (page: number, limit: number, id?: string) => Promise<any>,
  initData: UserPreview[] | Post[],
  id?: string,
  limit = 12
) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<UserPreview[] | Post[]>(initData);

  const getData = async () => {
    try {
      const { data, total, error } = await fetchData(page, limit, id);
      if (error) throw new Error(error);
      const totalPages = Math.ceil(total / limit);
      setHasMore(page !== totalPages);
      setData((d) => [...d, ...data]);
      setError("");
    } catch (error) {
      console.log("PAGINATION_ERROR: ", error);
      setHasMore(false);
      setError("An error ocurred, please try again later");
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => setPage((p) => p + 1);

  return { nextPage, hasMore, error, data };
};
