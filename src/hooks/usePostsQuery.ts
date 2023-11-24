import { useQuery } from "@tanstack/react-query";
import postServices from "../services/post-services";
import axios from "axios";

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
    queryKey: query.userId ? ["user", "posts", query] : ["posts", query], // any time 'userId' change query is refetch
    queryFn: () =>
      postQueryFn({
        userId: query.userId,
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize,
      }),
    // queryFn: () =>
    //   axios
    //     .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
    //       params: {
    //         _start: (query.page - 1) * query.pageSize,
    //         _limit: query.pageSize,
    //         userId: query.userId,
    //       },
    //     })
    //     .then((res) => res.data),
    staleTime: 10 * 1000, // data no longer fresh after 10s
    retry: 2,
    refetchOnReconnect: false,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: true,
  });

export default usePostsQuery;
