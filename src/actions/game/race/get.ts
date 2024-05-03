"use server";

import { db } from "@/db";
import { Race } from "@prisma/client";

export const getRaces = async (gameId: string): Promise<Race[]> => {
  try {
    const races = await db.race.findMany({
      where: {
        gameId,
      },
    });

    return races;
  } catch (error) {
    console.error("Something went wrong while fetching races!");

    return [];
  }
};
