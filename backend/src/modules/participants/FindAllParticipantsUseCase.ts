import { prisma } from "../../database/prismaClient";

export class FindAllParticipantsUseCase {
  async execute() {
    const participants = await prisma.participants.findMany({
      take: 10,
      orderBy: [
        {
          score: 'desc',
        },
        {
          seconds: 'asc'
        }
      ]
    })

    return participants
  }
}