import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image : string
}
  
interface FetchGame {
count: number;
results: Game[];
}
  
const useGame = () => {

let [games, setGame] = useState<Game[]>([]);
let [error, setError] = useState("");

useEffect(() => {
    let controller = new AbortController();
  apiClient
    .get<FetchGame>("/games", {signal : controller.signal})
    .then((res) => {
      setGame(res.data.results);
    })
    .catch((err) => {
        if(err instanceof CanceledError) return;
      setError(err.message);
    });
} , []);


return {games, error};
}

export default useGame;
