import { createRace } from "@/actions/game/race/create";
import CreateRaceForm from "@/components/game/forms/CreateRace/createRaceForm";

interface Props {}

const RacesPage: React.FC<Props> = () => {
  return (
    <div>
      <CreateRaceForm create={createRace} />
    </div>
  );
};

export default RacesPage;
