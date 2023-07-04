import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Link to={`/games/${game.slug}`}>
        <Card
          height={"100%"}
          cursor={"pointer"}
        >
          <Image src={getCroppedImgUrl(game.background_image)} 
          _hover={{ transform: "scale(1.03)" }}
          transition = '.2s'></Image>
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={"14px"}>
              <PlatformIconList
                platforms={
                  game.parent_platforms?.map((platform) => platform.platform) ||
                  []
                }
              ></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
            <Emoji rating={game.rating_top}></Emoji>
          </CardBody>
        </Card>
      </Link>
    </>
  );
}

export default GameCard;
