import { createRace } from "@/actions/game/race/create";
import { getRaces } from "@/actions/game/race/get";
import SingleRaceDisplay from "@/components/game/Race/SingleRaceDisplay";
import CreateRaceForm from "@/components/game/forms/CreateRace/createRaceForm";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Races",
};

const RacesPage: React.FC<Props> = async ({ params }) => {
  const races = await getRaces(params.id);

  return (
    <div>
      <div className="p-5 space-y-5">
        <h1 className="text-xl font-bold">Available races: {races.length}</h1>
        <div className="grid grid-str grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 place-items-stretch">
          {races.map((race, i) => (
            <SingleRaceDisplay race={race} key={race.id} gameId={params.id} />
          ))}
        </div>
      </div>
      <CreateRaceForm create={createRace} />
    </div>
  );
};

export default RacesPage;
