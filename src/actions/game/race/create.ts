"use server";

import { db } from "@/db";
import { CreateRace, CreateRaceSchema } from "@/types/game/form/createRace";
import { revalidatePath } from "next/cache";

export const createRace = async (values: CreateRace): Promise<string | null> => {
  try {
    const data = CreateRaceSchema.parse(values);

    const preparedTrais = data.traits.map((trait) => ({ ...trait, gameId: data.gameId }));

    const race = await db.race.create({
      data: {
        name: data.name,
        description: data.description,
        game: {
          connect: {
            id: data.gameId,
          },
        },
        traits: {
          create: preparedTrais,
        },
      },
      select: {
        id: true,
      },
    });

    revalidatePath("/game/[id]/", "page");
    return race.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};
