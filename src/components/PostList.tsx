import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import usePostsQuery, { PostQuery } from "../hooks/usePostsQuery";
import SelectItem from "./SelectItem";
import { useState } from "react";

const users = [
  { userId: 1, name: "User 1" },
  { userId: 2, name: "User 2" },
  { userId: 3, name: "User 3" },
  { userId: 4, name: "User 4" },
  { userId: 5, name: "User 5" },
  { userId: 6, name: "User 6" },
  { userId: 7, name: "User 7" },
  { userId: 8, name: "User 8" },
  { userId: 9, name: "User 9" },
  { userId: 10, name: "User 10" },
];

const pageSize = 10;

const PostList = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<PostQuery>({} as PostQuery);
  const {
    data: posts,
    error,
    isLoading,
  } = usePostsQuery({ ...query, page, pageSize });

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box>
      <Heading size="2xl" marginY={2}>
        All Posts
      </Heading>
      <SelectItem
        selected={query.userId}
        data={users}
        handleSelect={(data) => {
          console.log(data);
          if (data) setQuery({ ...query, userId: parseInt(data) });
          else setQuery({ ...query, userId: undefined });
        }}
      />
      <SimpleGrid minChildWidth="120px" spacing={2}>
        {posts?.map((post) => (
          <Box padding={2} borderRadius={8} bg="#686868" key={post.id}>
            <Text>{post.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Box paddingY={4}>
        <Button
          colorScheme="blue"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          marginX={3}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PostList;
