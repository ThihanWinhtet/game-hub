
import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenere";
import apiClient from "../services/api-client";
import { GameQuery } from "../App";

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
    metacritic : number;
    rating_top : number;
}

const useGame = (gameQuery : GameQuery) => 
useQuery<FetchResponse<Game>, Error>({
  queryKey : ['games', gameQuery],
  queryFn : () => apiClient.get<FetchResponse<Game>>('/games', {params : {
    genres : gameQuery.genre?.id, 
    platforms : gameQuery.platform?.id,
    ordering : gameQuery.sortOrder,
    search : gameQuery.searchText
  }}).then(res=> res.data)
})

export default useGame;
