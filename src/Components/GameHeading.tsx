import { Heading } from "@chakra-ui/react"
import useGenere from "../hooks/useGenere"
import { GameQuery } from "../App";

interface Props{
  gameQuery : GameQuery;
}

const GameHeading = ({gameQuery} : Props) => {
  const { data : genres } = useGenere();
  const genre = genres?.results.find(g=> g.id === gameQuery.genreId);
  return (
    <Heading as="h1" paddingBottom={5} fontSize={26}> {gameQuery.platform?.name || ''} {genre?.name || ''}</Heading>
  )
}

export default GameHeading