import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data : game , isLoading, error} = useGame(slug!);
  
  if (isLoading) return <Spinner></Spinner>
  if (error || !game) throw error;
  return (
    <>
    <Heading>{game.name}</Heading>
    <p>{game.description_raw}</p>
    </>
  )
}

export default GameDetailPage