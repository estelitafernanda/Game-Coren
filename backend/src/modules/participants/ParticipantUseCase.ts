import { prisma } from "../../database/prismaClient"
import Moment from 'moment'

interface IParticipant {
  name: string
  phone: string
  score: number
  seconds: number
}
export class ParticipantUseCase {
  
  async execute({ name, phone, score, seconds }: IParticipant) {

    const participant = await prisma.participants.create({
      data: {
        name,
        phone,
        score,
        seconds
      }
    })
    return participant
  }

}