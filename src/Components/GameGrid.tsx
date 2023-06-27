import { SimpleGrid } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenere";

interface Props{
  selectedGenre : Genre | null;
  selectedPlatform : Platform | null;
  selectedSortOrder : string;
  searchText : string;
}

function GameGrid({selectedGenre, selectedPlatform,  selectedSortOrder, searchText} : Props) {
  let { data, error, isLoading } = useGame(selectedGenre, selectedPlatform, selectedSortOrder, searchText);
  let skeleton = [1,2,3,4,5,6,7,8];

  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, lg: 3, md: 2, xl: 5 }}
        padding={"10px"}
        spacing={3}
      >
      {isLoading && skeleton.map(s => <GameCardContainer key={s}><GameCardSkeleton /></GameCardContainer>)}
        {!isLoading && data.map((game) => (
            <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
