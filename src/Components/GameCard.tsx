import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"

interface Props{
    game : Game
}

function GameCard({game} : Props) {
  return (
    <>
    <Card  borderRadius={'10px'} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(platform=> platform.platform)}></PlatformIconList>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard