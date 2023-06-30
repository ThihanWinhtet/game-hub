import { SimpleGrid } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  let { data, error, isLoading } = useGame(gameQuery);
  let skeleton = [1,2,3,4,5,6,7,8];

  return (
    <>
      {error && <text>{error.message}</text>}
      <SimpleGrid
        columns={{ sm: 1, lg: 3, md: 2, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
      {isLoading && skeleton.map(s => <GameCardContainer key={s}><GameCardSkeleton /></GameCardContainer>)}
        {!isLoading && data?.results.map((game) => (
            <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
