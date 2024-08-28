import { Router } from "express";
import { AnswerController } from "./modules/answers/useCases/AnswerController";
import { FindAllParticipantsController } from "./modules/participants/FindAllParticipantsController";
import { ParticipantController } from "./modules/participants/ParticipantController";
import { FindAllQuestionController } from "./modules/questions/useCases/FindAllQuestionController";
import { QuestionController } from "./modules/questions/useCases/QuestionController";

const routes = Router()

const questionController = new QuestionController()
const answerController = new AnswerController()
const findAllQuestionController = new FindAllQuestionController()
const participantController = new ParticipantController()
const findAllParticipantsController = new FindAllParticipantsController()


routes.post("/question", questionController.handle)
routes.post("/answer", answerController.handle)
routes.get("/questions", findAllQuestionController.handle)
routes.post("/participant", participantController.handle)
routes.get("/participants", findAllParticipantsController.handle)



export { routes }