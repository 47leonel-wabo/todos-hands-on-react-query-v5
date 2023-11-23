import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

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
      <GridItem area={"navbar"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"} bg="blue.300">
        Main
      </GridItem>
      <Show above="md">
        <GridItem area={"aside"} bg="gray.300">
          Aside
        </GridItem>
      </Show>
      <Show above="xl">
        <GridItem area={"nav"} bg="green.300">
          Left nav
        </GridItem>
      </Show>
      <GridItem area={"footer"} bg="red.300">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
