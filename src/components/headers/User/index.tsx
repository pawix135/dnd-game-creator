"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {}

const UserHeader: React.FC<Props> = () => {
  const { id } = useParams() as { id: string };

  return (
    <header className="flex flex-col w-full bg-secondary sticky top-0 left-0 z-[100]">
      <section className="flex flex-row gap-5 py-5 px-5">
        <h2>D&D Masters</h2>
        <nav className="space-x-5">
          <Link href={"/games"}>Games</Link>
        </nav>
      </section>
      <section className="w-full bg-gray-900 px-5 py-2">
        <nav className="space-x-5">
          <Link href={`/game/${id}`}>Home</Link>
          <Link href={`/game/${id}/races`}>Races</Link>
          <Link href={`/game/${id}/classes`}>Classes</Link>
          <Link href={`/game/${id}/traits`}>Traits</Link>
        </nav>
      </section>
    </header>
  );
};

export default UserHeader;
