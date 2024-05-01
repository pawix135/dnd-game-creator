import { z } from "zod";
import { TraitSchema } from "../trait";

export const CreateRaceSchema = z.object({
  gameId: z.string(),
  name: z.string(),
  description: z.string(),
  traits: z.array(TraitSchema),
});

export type CreateRace = z.infer<typeof CreateRaceSchema>;
