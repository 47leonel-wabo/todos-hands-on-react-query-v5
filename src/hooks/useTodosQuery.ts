import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import todoService from "../services/todo-services";
import { Todo } from "./useTodos";
import axios from "axios";

interface TodoQuery {
  pageSize: number;
}

const queryTodos = (params: any) =>
  todoService.getAll<Todo[]>(params).resultPromise.then((res) => res.data);

const useTodosQuery = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      queryTodos({
        _start: 1,
        _limit: 1,
      }),
    staleTime: 5 * 1000, // data no longer fresh after 5s
  });

export const useTodoInfiniteQuery = (query: TodoQuery) =>
  useInfiniteQuery<Todo[], Error>({
    queryKey: ["todo-infinite"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/todos", {
          params: {
            _start: ((pageParam as number) - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then(({ data }) => data),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    getPreviousPageParam: (firstPage, allPages) =>
      firstPage.length === 0 ? undefined : allPages.length - 1,
    initialPageParam: 1,
  });

export default useTodosQuery;
