import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGame {
  count: number;
  results: Game[];
}

function GameGrid() {
  let [games, setGame] = useState<Game[]>([]);
  let [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGame>("/games")
      .then((res) => {
        setGame(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  return (
    <>
      {error && <text>{error}</text>}
      {games.map((game) => (
        <li>
          {game.id} and {game.name}
        </li>
      ))}
    </>
  );
}

export default GameGrid;
