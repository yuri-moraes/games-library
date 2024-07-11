import "./index.css";
import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm.jsx";
import useGameCollection from "./hooks/useGameCollection.js";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2 style={{ margin: "4rem auto" }}>
            Parece que não há nenhum jogo ainda. Tente adicionar alguns jogos!
          </h2>
        )}
      </div>
    </div>
  );
}
