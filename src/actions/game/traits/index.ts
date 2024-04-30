"use server";
import { db } from "@/db";
import { CreateTrait, CreateTraitSchema } from "@/types/game/form/createTrait";
import { Trait } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getTraits = async (gameId: string): Promise<Trait[]> => {
  if (!gameId) throw new Error("gameId not found!");
  try {
    const traits = await db.trait.findMany({
      where: {
        gameId,
      },
    });

    return traits;
  } catch (error) {
    console.error("Something went wrong while fetching traits", error);
    return [];
  }
};

export const createTrait = async (values: CreateTrait): Promise<Trait | null> => {
  try {
    const data = CreateTraitSchema.parse(values);

    const trait = await db.trait.create({
      data,
    });

    revalidatePath("/game/[id]/traits", "page");

    return trait;
  } catch (error) {
    console.error("Something went wrong while creating trait!", error);
    return null;
  }
};
