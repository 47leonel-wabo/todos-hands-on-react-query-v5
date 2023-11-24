import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todo-services";
import { Todo } from "./useTodos";

const queryTodos = () =>
  todoService.getAll<Todo[]>().resultPromise.then((res) => res.data);

const useTodosQuery = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: queryTodos,
    staleTime: 5 * 1000, // data no longer fresh after 5s
  });

export default useTodosQuery;
