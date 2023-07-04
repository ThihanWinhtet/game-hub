import { Heading } from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: genres } = useGenere();
  const { data: platforms } = usePlatform();

  const genre = genres?.results.find((g) => g.id === genreId);
  const platform = platforms?.results.find((p) => p.id === platformId);
  return (
    <Heading as="h1" paddingBottom={5} fontSize={40}>
      {" "}
      {platform?.name || ""} {genre?.name || ""}
    </Heading>
  );
};

export default GameHeading;
