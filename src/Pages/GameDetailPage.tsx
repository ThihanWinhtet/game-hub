import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import GameAttribute from "../Components/GameAttribute";
import GameTrailer from "../Components/GameTrailer";
import ScreenShots from "../Components/ScreenShots";

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data : game , isLoading, error} = useGame(slug!);
  
  if (isLoading) return <Spinner></Spinner>
  if (error || !game) throw error;
  return (
    <>
    <Heading>{game.name}</Heading>
    <ExpandableText>{game.description_raw}</ExpandableText>
    <GameAttribute game={game}></GameAttribute>
    <GameTrailer gameId={game.id}></GameTrailer>
    <ScreenShots gameId={game.id}></ScreenShots>
    </>
  )
}

export default GameDetailPage