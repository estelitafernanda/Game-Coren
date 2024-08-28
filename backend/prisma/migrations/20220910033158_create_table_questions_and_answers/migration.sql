-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "id_question" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
