import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

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
            <HStack justifyContent='space-between' marginY  ={'14px'}>
                <PlatformIconList platforms={game.parent_platforms.map(platform=> platform.platform)}></PlatformIconList>
                <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard