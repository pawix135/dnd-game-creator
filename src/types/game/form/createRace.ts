import { z } from "zod";
import { TraitSchema } from "../trait";

export const CreateRaceSchema = z.object({
  gameId: z.string(),
  name: z.string().min(1),
  description: z.string().min(50),
  traits: z.array(TraitSchema),
});

export type CreateRace = z.infer<typeof CreateRaceSchema>;
