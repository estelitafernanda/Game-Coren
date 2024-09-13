import { prisma } from "../../database/prismaClient"
import Moment from 'moment'

interface IParticipant {
  name: string
  estado: string
  phone: string
  score: number
  seconds: number
}
export class ParticipantUseCase {
  
  async execute({ name, estado, phone, score, seconds }: IParticipant) {

    const participant = await prisma.participants.create({
      data: {
        name,
        estado,
        phone,
        score,
        seconds
      }
    })
    return participant
  }

}