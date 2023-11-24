import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import useTodosMutation from "../hooks/useTodosMutation";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const todoMutation = useTodosMutation();

  if (todoMutation.isPending) return <Text>Adding todo...</Text>;

  return (
    <VStack>
      {todoMutation.isError ? (
        <Text>An error occurred: {todoMutation.error.message}</Text>
      ) : null}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            todoMutation.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <HStack marginY={3}>
          <FormControl>
            <FormLabel>New todo name</FormLabel>
            <Input ref={ref} type="text" />
            <FormHelperText>Define your next todo here</FormHelperText>
          </FormControl>
          <Button type="submit">Save</Button>
        </HStack>
      </form>
      {todoMutation.isSuccess ? <Text>Todo added</Text> : null}
    </VStack>
  );
};

export default TodoForm;
