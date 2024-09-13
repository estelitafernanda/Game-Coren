import { Request, Response } from "express";
import { ParticipantUseCase } from "./ParticipantUseCase";



export class ParticipantController {
  async handle(request: Request, response: Response) {
    const { name, estado, phone, score, seconds } = request.body
    const participantUseCase = new ParticipantUseCase()

    const participant = await participantUseCase.execute({
      name,
      estado,
      phone,
      score,
      seconds
    })

    return response.json(participant)
  }
}