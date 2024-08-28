import { prisma } from "../../../database/prismaClient";

interface IQuestion {
  description: string
}
export class QuestionUseCase {

  async execute({ description }: IQuestion) {
    const question = await prisma.questions.create({
      data: {
        description
      }
    })
    return question
  }

}