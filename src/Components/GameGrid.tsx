import useGame from "../hooks/useGame";


function GameGrid() {
    let {games, error} = useGame();
  
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
