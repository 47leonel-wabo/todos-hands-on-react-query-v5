import { useEffect, useState } from "react";
import todoService from "../services/todo-services";
import { CanceledError } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { controller, resultPromise } = todoService.getAll<Todo[]>();
    resultPromise
      .then(({ data }) => setTodos(data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort(); // if user left the page before the request is completed, abort it
  }, []);

  return { todos, error, isLoading };
};

export default useTodos;
