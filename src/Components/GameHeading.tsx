import { Heading } from "@chakra-ui/react"
import useGenere from "../hooks/useGenere"
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";

interface Props{
  gameQuery : GameQuery;
}

const GameHeading = ({gameQuery} : Props) => {
  const { data : genres } = useGenere();
  const { data : platforms } = usePlatform();
  const genre = genres?.results.find(g=> g.id === gameQuery.genreId);
  const platform = platforms?.results.find(p=> p.id === gameQuery.platformId);
  return (
    <Heading as="h1" paddingBottom={5} fontSize={40}> {platform?.name || ''} {genre?.name || ''}</Heading>
  )
}

export default GameHeading