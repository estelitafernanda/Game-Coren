import { Request, Response } from "express";
import { QuestionUseCase } from "./QuestionUseCase"

export class QuestionController {
  async handle(request: Request, response: Response) {
    const { description } = request.body

    const questionUseCase = new QuestionUseCase()

    const question = await questionUseCase.execute({
      description
    })

    return response.json(question)
  }
}