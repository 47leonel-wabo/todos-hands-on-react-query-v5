import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useTodosQuery, { useTodoInfiniteQuery } from "../hooks/useTodosQuery";

const pageSize = 10;

const TodoList = () => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useTodoInfiniteQuery({ pageSize });

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box>
      <Heading size="2xl" marginY={2}>
        All Todos
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing={2}>
        {data?.pages.map((pages, index) => (
          <Box key={index}>
            {pages.map((todo) => (
              <Box
                padding={2}
                marginY={2}
                borderRadius={8}
                bg="#7d8a41"
                key={todo.id}
              >
                <Text>{todo.title}</Text>
                {todo.completed && (
                  <Text as="b" color={"tomato"}>
                    Done
                  </Text>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </SimpleGrid>
      <Button
        marginY={3}
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading data..." : "Load more"}
      </Button>
    </Box>
  );
};

export default TodoList;
