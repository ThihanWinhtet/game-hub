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

function App() {
  let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  let [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  let [selectedSortOrder, setSelectedSortOrder] = useState('');
  let [searchText, setSearchText] = useState('');

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
          <NavBar onSearch={(searchText)=> setSearchText(searchText)} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}><GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/></GridItem>
        </Show>
        <GridItem area="main">

       <Box paddingLeft={2}>
       <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          <HStack  paddingBottom={5}>
          <PlatformSelector selectedPlatform={selectedPlatform} selectPlatform={(platform)=> setSelectedPlatform(platform)}></PlatformSelector>
          <SortSelector sortOrde={selectedSortOrder} onSelectSortOrder={(selectedSortOrder)=> setSelectedSortOrder(selectedSortOrder)}></SortSelector>
          </HStack>
       </Box>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} selectedSortOrder={selectedSortOrder} searchText={searchText} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
