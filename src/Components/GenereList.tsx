import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import getCroppedImgUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenereList = () => {
  let { data, isLoading, error } = useGenere();
  let genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  let setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data?.results.map((m) => (
        <ListItem key={m.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImgUrl(m.image_background)}
              boxSize={"34px"}
              borderRadius={"4px"}
              objectFit={"cover"}
            ></Image>
            <Button
              whiteSpace={"normal"}
              textAlign={"left"}
              fontWeight={genreId === m.id ? "bold" : "normal"}
              fontSize={"lg"}
              variant="link"
              onClick={() => setGenreId(m.id)}
            >
              {m.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
