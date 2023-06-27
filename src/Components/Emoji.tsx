import { Image, ImageProps } from '@chakra-ui/react';
import bullEyes from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumb from '../assets/thumbs-up.webp';

interface Props{
    rating : number;
}

const Emoji = ({rating} : Props) => {
    if(rating < 3) return null;
    const emojeMap : {[ key : number] : ImageProps} = {
        3 : { src : meh , boxSize : '25px'},
        4 : { src : thumb , boxSize : '25px'},
        5 : { src : bullEyes , boxSize : '35px'},
    }
  return (
    <Image {...emojeMap[rating]} marginTop={1}></Image>
  )
}

export default Emoji