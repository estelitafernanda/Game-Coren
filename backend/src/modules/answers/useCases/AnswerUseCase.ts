import { prisma } from "../../../database/prismaClient";

interface IAnswer {
  description: string
  id_question: number
  correct: boolean
}
export class AnswerUseCase{
  
  async execute({ description, id_question, correct }: IAnswer) {
    const question = await prisma.answers.create({
      data: {
        description,
        id_question,
        correct
      }
    })
    return question
  }

}