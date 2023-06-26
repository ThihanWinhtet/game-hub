import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";


function GameGrid() {
    let {games, error} = useGame();
  
  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid columns={{sm : 1, lg : 3, md : 2, xl : 5}} padding={'10px'} spacing={'10px'}>
      {games.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
