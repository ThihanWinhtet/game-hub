import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenere, { Genre } from "../hooks/useGenere";
import getCroppedImgUrl from "../services/image-url";

interface Props{
  onSelectGenre : (genre : Genre) => void;
  selectedGenre : Genre | null;
}

const GenereList = ({onSelectGenre, selectedGenre} : Props) => {
  let { data , isLoading, error} = useGenere();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>

  return (
    <List>
      {data.map((m) => (
        <ListItem key={m.id} paddingY={'5px'}>
          <HStack>
          <Image src={getCroppedImgUrl(m.image_background)} boxSize={'34px'} borderRadius={'4px'} objectFit={'cover'}></Image>
          <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={selectedGenre?.id === m.id ? 'bold' : 'normal'} fontSize={'lg'} variant='link' onClick={()=>onSelectGenre(m)}>{m.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
