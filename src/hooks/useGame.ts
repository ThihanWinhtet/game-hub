import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  
interface FetchGame {
count: number;
results: Game[];
}
  
const useGame = () => {

let [games, setGame] = useState<Game[]>([]);
let [error, setError] = useState("");
let [isLoading, setLoading] = useState(false);

useEffect(() => {
    let controller = new AbortController();

    setLoading(true);
  apiClient
    .get<FetchGame>("/games", {signal : controller.signal})
    .then((res) => {
      setGame(res.data.results);
      setLoading(false);
    })
    .catch((err) => {
        if(err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    });
} , []);


return {games, error, isLoading};
}

export default useGame;
