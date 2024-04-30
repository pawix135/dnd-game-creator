"use server";

import { db } from "@/db";
import { GameIncludePlayers } from "@/types/game/db";
import { CreateGame, CreateGameSchema } from "@/types/game/form/createGame";
import { Game, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getGames = async (): Promise<Game[]> => {
  try {
    const games = await db.game.findMany();
    return games;
  } catch (error) {
    return [];
  }
};

export const getGame = async (id: string): Promise<GameIncludePlayers | null> => {
  try {
    const game = await db.game.findFirst({
      where: {
        id,
      },
      include: { players: true },
    });

    if (!game) return null;

    return game;
  } catch (error) {
    return null;
  }
};

export const createGame = async (values: FormData): Promise<Game | null> => {
  try {
    const parseGame = CreateGameSchema.parse(Object.fromEntries(values));

    const game = await db.$transaction(async (ctx) => {
      const nameTaken = await ctx.game.findFirst({ where: { title: parseGame.title } });
      if (nameTaken) throw new Error("Game title already taken!");

      const uploadImage = new FormData();
      uploadImage.set("image", parseGame.image);
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: uploadImage,
      });

      const image = (await response.json()) as { filename: string };
      if (!image) throw Error("Something went wrong while uploading your game icon!");

      console.log(image);

      const game = await db.game.create({
        data: {
          title: parseGame.title,
          image: image.filename,
        },
      });

      return game;
    });

    revalidatePath("/", "page");

    return game;
  } catch (error) {
    console.log("Something went wrong while create new game!", error);
    return null;
  }
};
