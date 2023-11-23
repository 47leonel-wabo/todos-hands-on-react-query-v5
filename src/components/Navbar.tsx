import { Box, HStack, Heading, Switch, useColorMode } from "@chakra-ui/react";
import { MdNightsStay, MdOutlineLightMode } from "react-icons/md";
import { SlNote } from "react-icons/sl";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} marginX={2}>
      <Box display={"flex"} alignItems={"baseline"}>
        <SlNote size={24} color="tomato" />
        <Heading size="lg" color={"tomato"} marginX={1}>
          Todos
        </Heading>
      </Box>
      <Box display={"flex"} alignItems={"center"} padding={2}>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          size={"sm"}
          onChange={toggleColorMode}
        />
        <Box marginLeft={2}>
          {colorMode === "light" ? <MdOutlineLightMode /> : <MdNightsStay />}
        </Box>
      </Box>
    </HStack>
  );
};

export default Navbar;
