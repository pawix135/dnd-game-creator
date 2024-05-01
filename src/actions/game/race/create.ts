"use server";

import { CreateRace, CreateRaceSchema } from "@/types/game/form/createRace";

export const createRace = async (values: CreateRace) => {
  try {
    const data = CreateRaceSchema.parse(values);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return false;
};
