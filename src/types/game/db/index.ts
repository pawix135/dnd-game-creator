import { Prisma } from "@prisma/client";

export type GameIncludePlayers = Prisma.GameGetPayload<{ include: { players: true } }>;
