import { getGame } from "@/actions/game";
import { buttonVariants } from "@/components/ui/button";
import { headers } from "next/headers";
import Link, { LinkProps } from "next/link";
import { notFound } from "next/navigation";
import RelativeLink from "@/components/RelativeLink";
import { User } from "lucide-react";
import CardLink from "@/components/game/CardLink";
import GamePropertiesLinksDisplay from "@/components/game/GamePropertiesLinksDisplay";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const GamePage: React.FC<Props> = async ({ params }) => {
  const game = await getGame(params.id);
  if (!game) return notFound();

  const hdrs = headers();
  const pathname = hdrs.get("x-pathname");

  return (
    <div>
      {game.image && <Image src={`http://localhost:8080/image?image=${game.image}`} alt="" width={300} height={300} />}
      <GamePropertiesLinksDisplay />
    </div>
  );
};

export default GamePage;
