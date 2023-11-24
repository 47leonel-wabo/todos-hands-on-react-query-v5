import { useQuery } from "@tanstack/react-query";
import postServices from "../services/post-services";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postQueryFn = () =>
  postServices.getAll<Post[]>().resultPromise.then((res) => res.data);

const usePostsQuery = () =>
  useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: postQueryFn,
    staleTime: 10 * 1000, // data no longer fresh after 10s
    retry: 2,
    refetchOnReconnect: false,
    refetchOnWindowFocus: true,
  });

export default usePostsQuery;
