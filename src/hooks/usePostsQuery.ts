import { useQuery } from "@tanstack/react-query";
import postServices from "../services/post-services";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostQuery {
  userId: number | undefined;
  page: number;
  pageSize: number;
}

const postQueryFn = (params: any) =>
  postServices.getAll<Post[]>(params).resultPromise.then((res) => res.data);

const usePostsQuery = (query: PostQuery) =>
  useQuery<Post[], Error>({
    queryKey: query.userId ? ["users", query.userId, "posts"] : ["posts"], // any time 'userId' change query is refetch
    queryFn: () => postQueryFn({ ...query }),
    staleTime: 10 * 1000, // data no longer fresh after 10s
    retry: 2,
    refetchOnReconnect: false,
    refetchOnWindowFocus: true,
  });

export default usePostsQuery;
