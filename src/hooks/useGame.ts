
import useData from "./useData";
import { Genre } from "./useGenere";

export interface Platform {
  id : number;
  name : string;
  slug : string;
}

export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms : { platform : Platform }[];
    metacritic : number
}

const useGame = (selectedGenre : Genre | null, selectedPlatform : Platform | null, selectedSortOrder : string) => useData<Game>('/games', {params : {
  genres : selectedGenre?.id, 
  platforms : selectedPlatform?.id,
  ordering : selectedSortOrder
}}, 
  [selectedGenre?.id, selectedPlatform?.id, selectedSortOrder]);

export default useGame;
