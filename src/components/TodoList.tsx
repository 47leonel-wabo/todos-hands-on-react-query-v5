import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const { todos, error, isLoading } = useTodos();

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error}</Text>;

  return (
    <Box>
      <Heading size="2xl" marginY={2}>
        All Todos
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing={2}>
        {todos.map((todo) => (
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
