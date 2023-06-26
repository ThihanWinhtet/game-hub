import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenereList";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `'nav nav' 'main main'`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside"><GenereList/></GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
