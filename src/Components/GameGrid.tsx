import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  let { games, error, isLoading } = useGame();
  let skeleton = [1,2,3,4,5,6,7,8];

  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, lg: 3, md: 2, xl: 5 }}
        padding={"10px"}
        spacing={"10px"}
      >
      {isLoading && skeleton.map(s => <GameCardSkeleton key={s} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
