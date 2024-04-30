import { Game } from "@prisma/client";
import Link from "next/link";

interface Props {
  games: Game[];
}

const GamesDisplay: React.FC<Props> = ({ games }) => {
  return (
    <div className="grid grid-cols-3 gird-flow-row gap-5">
      {games.map((game, i) => {
        return (
          <Link href={`/game/${game.id}`} key={game.id} className="bg-secondary py-5">
            {game.title}
          </Link>
        );
      })}
    </div>
  );
};

export default GamesDisplay;
