import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../Entities/Game"
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";

interface Props{
    game : Game;
}

const GameAttribute = ({game} : Props) => {
  return (
    <SimpleGrid columns={2} as={'dl'}>
      <DefinationItem term="Platform">
        {game.parent_platforms.map((p)=> <Text key={p.platform.id}>{p.platform.name}</Text>)}
      </DefinationItem>
      <DefinationItem term="MetaScore">
        <CriticScore score={game.metacritic} />
      </DefinationItem>
      <DefinationItem term="Genre">
        {game.genres.map((genre)=> <Text key={genre.id}>{genre.name}</Text>)}
      </DefinationItem>
      <DefinationItem term="Publisher">
        {game.publisher?.map((p)=> <Text key={p.name}>{p.name}</Text>)}
      </DefinationItem>
    </SimpleGrid>
  )
}

export default GameAttribute