import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useTodos, { Todo } from "../hooks/useTodos";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const fetchTodos = () =>
  apiClient.get<Todo[]>("/todos").then((response) => response.data);

const TodoList = () => {
  const { data: todos, error } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box>
      <Heading size="2xl" marginY={2}>
        All Todos
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing={2}>
        {todos?.map((todo) => (
          <Box padding={2} borderRadius={8} bg="#686868" key={todo.id}>
            <Text>{todo.title}</Text>
            {todo.completed && (
              <Text as="b" color={"green"}>
                Done
              </Text>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TodoList;
