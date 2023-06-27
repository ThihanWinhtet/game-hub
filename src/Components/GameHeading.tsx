import { Heading } from "@chakra-ui/react"
import { Genre } from "../hooks/useGenere"
import { Platform } from "../hooks/useGame";

interface Props{
    selectedGenre : Genre | null;
    selectedPlatform : Platform | null
}

const GameHeading = ({selectedGenre, selectedPlatform} : Props) => {
  return (
    <Heading as="h1" paddingBottom={5}> {selectedGenre && selectedGenre.name} {selectedPlatform && selectedPlatform.name} {selectedGenre || selectedPlatform ? 'Games' : ''}</Heading>
  )
}

export default GameHeading