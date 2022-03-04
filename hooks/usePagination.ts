import { useEffect, useState } from "react";
import { Post, UserPreview } from "../types";

export const usePagination = (
  fetchData: (page: number, limit: number, id?: string) => Promise<any>,
  initData: UserPreview[] | Post[],
  id?: string,
  limit = 12
) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<UserPreview[] | Post[]>(initData);

  const getData = async () => {
    const { data, total } = await fetchData(page, limit, id);
    const totalPages = Math.ceil(total / limit);
    setHasMore(page !== totalPages);
    setData((d) => [...d, ...data]);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => setPage((p) => p + 1);

  return { nextPage, hasMore, data };
};
