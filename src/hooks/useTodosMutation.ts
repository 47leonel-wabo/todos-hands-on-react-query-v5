import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";

const useTodosMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["new-todo"],
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then(({ data }) => data),
    onSuccess: (savedTodo, sentTodo) => {
      // Invalidate the cache - THIS DEPENDS ON API SPEC
      //   queryClient.invalidateQueries({
      //     queryKey: ["todo-infinite"],
      //   });

      // Other approach is to update the cache directly
      queryClient.setQueryData<Todo[]>(["todo-infinite"], (oldTodos) => [
        savedTodo,
        ...(oldTodos || []),
      ]);
    },
  });
};

export default useTodosMutation;
