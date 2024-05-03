import { Race } from "@prisma/client";
import Link from "next/link";

interface Props {
  race: Race;
  gameId: string;
}

import Image from "next/image";
import { User } from "lucide-react";

const SingleRaceDisplay: React.FC<Props> = ({ race, gameId }) => {
  return (
    <Link
      href={`/game/${gameId}/races/${race.id}`}
      className="flex flex-col items-center gap-2 border shadow-lg w-full py-5 px-2"
    >
      {/* <Image src={"http://localhost:8080/image?someimage.png"} alt="Race Icon" width={150} height={150} /> */}
      <User size={100} />
      <span className="break-all text-center">{race.name}</span>
    </Link>
  );
};

export default SingleRaceDisplay;
