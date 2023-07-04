import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import GameGrid from "../Components/GameGrid"
import GameHeading from "../Components/GameHeading"
import GenereList from "../Components/GenereList"
import PlatformSelector from "../Components/PlatformSelector"
import SortSelector from "../Components/SortSelector"

const HomePage = () => {
  return (
    <Grid
        templateAreas={{
          lg: `"aside main"`,
          base: `'main'`,
        }}

        templateColumns={{
          base : '1fr',
          lg : '200px'
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}><GenereList /></GridItem>
        </Show>
        <GridItem area="main">
            <Box paddingLeft={2}>
                <GameHeading/>
                <HStack  paddingBottom={5}>
                <PlatformSelector ></PlatformSelector>
                <SortSelector ></SortSelector>
                </HStack>
            </Box>
          <GameGrid />
        </GridItem>
      </Grid>
  )
}

export default HomePage