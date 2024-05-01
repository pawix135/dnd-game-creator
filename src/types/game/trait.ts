import { z } from "zod";

export const TraitSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type CreateTrate = z.infer<typeof TraitSchema>;
