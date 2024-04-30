import { Trait } from "@prisma/client";

interface Props {
  traits: Trait[];
}

const TraitsDisplay: React.FC<Props> = ({ traits }) => {
  return (
    <div className="flex flex-col gap-5 p-2">
      {traits.map((trait, i) => {
        return (
          <div key={trait.id} className="border b-white px-5 py-2 space-y-2">
            <p>Name: {trait.name}</p>
            <p>Description: {trait.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TraitsDisplay;
