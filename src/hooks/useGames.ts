
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/api-client";
import { GameQuery } from "../store";
import Game from "../Entities/Game";

const apiClient = new APIClient<Game>('/games');


const useGames = (gameQuery : GameQuery) => 
useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey : ['games', gameQuery],
  queryFn : ( {pageParam = 1} ) => apiClient.getAll({
    params : {
      genres : gameQuery.genreId, 
      platforms : gameQuery.platformId,
      ordering : gameQuery.sortOrder,
      search : gameQuery.searchText,
      page : pageParam
    }
  }),
  getNextPageParam : (lastPage, allPage) =>{
    return lastPage.next ? allPage.length + 1 : undefined; 
  }
})

export default useGames;
