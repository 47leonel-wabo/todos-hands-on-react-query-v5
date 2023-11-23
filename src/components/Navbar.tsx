import { Box, HStack, Heading, Switch, useColorMode } from "@chakra-ui/react";
import { MdNightsStay, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"}>
      <Box>
        <Heading size="lg" color={"tomato"} marginX={2}>
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
        <Box marginX={2}>
          {colorMode === "light" ? <MdOutlineLightMode /> : <MdNightsStay />}
        </Box>
      </Box>
    </HStack>
  );
};

export default Navbar;
