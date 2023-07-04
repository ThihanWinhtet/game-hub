import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenereList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";
import useGameQueryStore from "./store";



function App() {

  return (
    <div>
      <Grid
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `'nav nav' 'main main'`,
        }}

        templateColumns={{
          base : '1fr',
          lg : '200px'
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}><GenereList /></GridItem>
        </Show>
        <GridItem area="main">

       <Box paddingLeft={2}>
       <GameHeading />
          <HStack  paddingBottom={5}>
          <PlatformSelector ></PlatformSelector>
          <SortSelector ></SortSelector>
          </HStack>
       </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
