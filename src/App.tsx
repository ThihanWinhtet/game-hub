import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenere";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGame";

function App() {
  let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  let [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
          <GridItem area="aside" paddingX={5}><GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/></GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={selectedPlatform} selectPlatform={(platform)=> setSelectedPlatform(platform)}></PlatformSelector>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
