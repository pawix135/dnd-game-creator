import { z } from "zod";

export const CreateTraitSchema = z.object({
  name: z.string(),
  description: z.string(),
  gameId: z.string(),
});

export type CreateTrait = z.infer<typeof CreateTraitSchema>;
