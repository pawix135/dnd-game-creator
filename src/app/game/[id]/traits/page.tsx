import { getTraits, createTrait } from "@/actions/game/traits";
import TraitsDisplay from "@/components/game/TraitsDisplay";
import CreateTrateForm from "@/components/game/forms/createTraitForm";

interface Props {
  params: { id: string };
}

const TraitsPage: React.FC<Props> = async ({ params }) => {
  const traits = await getTraits(params.id);

  console.log(traits);

  return (
    <div>
      <h1>Traits: </h1>
      <TraitsDisplay traits={traits} />
      <CreateTrateForm gameId={params.id} createTraitAction={createTrait} />
    </div>
  );
};

export default TraitsPage;
