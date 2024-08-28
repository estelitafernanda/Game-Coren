import { Request, Response } from "express";
import { FindAllParticipantsUseCase } from "./FindAllParticipantsUseCase";



export class FindAllParticipantsController {
  async handle(request: Request, response: Response) {

    const findAllParticipantsUseCase = new FindAllParticipantsUseCase()

    const participants = await findAllParticipantsUseCase.execute()

    return response.json(participants)

  }
}