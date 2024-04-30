import { createGame, getGames } from "@/actions/game";
import GameCreator from "@/components/game/GameCreator";
import GamesDisplay from "@/components/game/GamesDisplay";
import CreateGameForm from "@/components/game/forms/createGameForm";

export default async function Home() {
  const games = await getGames();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <GamesDisplay games={games} />
      <CreateGameForm createGameAction={createGame} />
      <GameCreator />
    </main>
  );
}
