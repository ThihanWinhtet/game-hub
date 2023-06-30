import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  let {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  let skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box padding={"10px"}>
      {error && <text>{error.message}</text>}
      <SimpleGrid
        columns={{ sm: 1, lg: 3, md: 2, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeleton.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((pages, index) => (
          <React.Fragment key={index}>
            {pages.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && <Button onClick={()=>fetchNextPage()} marginY={5}> {isFetchingNextPage ? 'Loading' : 'Load more'} </Button>}
    </Box>
  );
}

export default GameGrid;
