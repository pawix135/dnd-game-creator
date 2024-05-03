import { z } from "zod";

export const CreateTraitSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(50),
  gameId: z.string(),
});

export type CreateTrait = z.infer<typeof CreateTraitSchema>;
