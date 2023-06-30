import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenere";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery { 
  genre: Genre | null;
  platform: Platform | null;
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
          <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery ,searchText})} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}><GenereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery ,genre})}/></GridItem>
        </Show>
        <GridItem area="main">

       <Box paddingLeft={2}>
       <GameHeading selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform} />
          <HStack  paddingBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} selectPlatform={(platform)=> setGameQuery({...gameQuery ,platform})}></PlatformSelector>
          <SortSelector sortOrde={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery , sortOrder})}></SortSelector>
          </HStack>
       </Box>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem><GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      </Grid>
    </div>
  );
}

export default App;
