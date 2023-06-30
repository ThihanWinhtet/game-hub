import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenereList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery { 
  genreId ?: number;
  platformId : number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar  onSearch={(searchText)=> setGameQuery({...gameQuery ,searchText})} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}><GenereList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre)=> setGameQuery({...gameQuery ,genreId : genre.id})}/></GridItem>
        </Show>
        <GridItem area="main">

       <Box paddingLeft={2}>
       <GameHeading gameQuery={gameQuery} />
          <HStack  paddingBottom={5}>
          <PlatformSelector selectedPlatformId={gameQuery.platformId} selectPlatform={(platform)=> setGameQuery({...gameQuery ,platformId : platform.id})}></PlatformSelector>
          <SortSelector sortOrde={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery , sortOrder})}></SortSelector>
          </HStack>
       </Box>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
