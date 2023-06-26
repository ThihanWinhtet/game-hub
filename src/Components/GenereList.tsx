import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import getCroppedImgUrl from "../services/image-url";

const GenereList = () => {
  let { data } = useGenere();

  return (
    <List>
      {data.map((m) => (
        <ListItem key={m.id} paddingY={'5px'}>
          <HStack>

          <Image src={getCroppedImgUrl(m.image_background)} boxSize={'34px'} borderRadius={'4px'}></Image>
          <Text fontSize={'lg'}>{m.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
