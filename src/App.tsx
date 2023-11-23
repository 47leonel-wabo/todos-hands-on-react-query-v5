import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `
        "navbar"
        "main"
        "footer"
        `,
        md: `
        "navbar navbar"
        "aside main"
        "aside footer"
        `,
        xl: `
        "navbar navbar navbar"
        "aside main nav"
        "aside footer nav"
        `,
      }}
      gridTemplateColumns={{
        base: "1fr",
        md: "200px 1fr",
        xl: "400px 1fr 100px",
      }}
      gap={1}
    >
      <GridItem area={"navbar"} paddingY={2}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"} padding={2}>
        <TodoList />
      </GridItem>
      <Show above="md">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <Show above="xl">
        <GridItem area={"nav"}>Left nav</GridItem>
      </Show>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}

export default App;
