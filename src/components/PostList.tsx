import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import usePostsQuery from "../hooks/usePostsQuery";

const PostList = () => {
  const { data: posts, error, isLoading } = usePostsQuery();

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box>
      <Heading size="2xl" marginY={2}>
        All Posts
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing={2}>
        {posts?.map((post) => (
          <Box padding={2} borderRadius={8} bg="#686868" key={post.id}>
            <Text>{post.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PostList;
