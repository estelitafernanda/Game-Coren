import { Request, Response } from "express";
import { AnswerUseCase } from "./AnswerUseCase";


export class AnswerController {
  async handle(request: Request, response: Response) {
    const { description, id_question, correct } = request.body
    const answerUseCase = new AnswerUseCase()

    const answer = await answerUseCase.execute({
      description,
      id_question,
      correct
    })

    return response.json(answer)
  }
}