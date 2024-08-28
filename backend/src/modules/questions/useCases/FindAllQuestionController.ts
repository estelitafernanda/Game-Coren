import { Request, Response } from "express";
import { FindAllQuestionUseCase } from "./FindAllQuestionUseCase";


export class FindAllQuestionController {
  async handle(request: Request, response: Response){
    
    const findAllQuestionUseCase = new FindAllQuestionUseCase()

    const questions = await findAllQuestionUseCase.execute()

    return response.json(questions)
  }
}