import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card height={"100%"}>
        <Image src={getCroppedImgUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={"14px"}>
            <PlatformIconList
              platforms={game.parent_platforms?.map(
                (platform) => platform.platform
                ) || []}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top}></Emoji>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
