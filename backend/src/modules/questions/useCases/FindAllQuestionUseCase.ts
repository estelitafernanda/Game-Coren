import { prisma } from "../../../database/prismaClient";



export class FindAllQuestionUseCase {
  async execute() {

   // const questionsCount = await prisma.questions.count();
   // const skip = Math.floor(Math.random() * questionsCount);

    const questions = await prisma.$queryRaw`
    SELECT
      q.*,
      json_agg(a.*) as answers
    FROM
      questions q
    LEFT JOIN
      answers a
    ON
      q.id = a.id_question
    GROUP BY
      q.id
    ORDER BY
      random()
    LIMIT 30
  `;

    // const questions = await prisma.questions.findMany({
    //   take: 30,
    //   skip: skip,
    //   include: {
    //     answers: true
    //   }
    // })
    

    return questions;

  }
} 