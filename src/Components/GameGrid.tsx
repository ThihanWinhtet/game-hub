import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";


function GameGrid() {
  const gameQuery =useGameQueryStore(s => s.gameQuery);
  useGameQueryStore(s => s.gameQuery);
  let { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGame(gameQuery);
  let skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchGameCount =
    data?.pages.reduce((accu, curr) => accu + curr.results.length, 0) || 0;

  return (
    <Box padding={"10px"}>
      {error && <text>{error.message}</text>}
      <InfiniteScroll
        dataLength={fetchGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner></Spinner>}
        endMessage = {<p className="end_message">end of the list</p>}
      >
        <SimpleGrid columns={{ sm: 1, lg: 3, md: 2, xl: 4 }} spacing={6}>
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
      </InfiniteScroll>
      {/* {hasNextPage && <Button onClick={()=>fetchNextPage()} marginY={5}> {isFetchingNextPage ? 'Loading' : 'Load more'} </Button>} */}
    </Box>
  );
}

export default GameGrid;
