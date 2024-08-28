import { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser'
import useSound from "use-sound"
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const [answersEnabled, setAnswersEnabled] = useState(true);


  const [className, setClassName] = useState("answer")
  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

 //console.log(question)

  useEffect(() => {
    letsPlay()
  }, [letsPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassName("answer active")

    setAnswersEnabled(false); // Desabilitar as respostas

    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })
    delay(4000, () => {
      if (a.correct) {
        correctAnswer()
        delay(2000, () => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
          setAnswersEnabled(true); // Habilitar as respostas novamente
        })
      } else {
        wrongAnswer()
        delay(3000, () => {
          setStop(true)
        })
      }
    })
  }

  return (
    <div className="trivia">
      <div className="question">{ReactHtmlParser(question?.description)}</div>
      <div className="answers">
        {question?.answers.map((a)=>(
          <div
            key={a.id}
            className={
              selectedAnswer === a ? className : (answersEnabled ? "answer" : "answer disabled")
            } 
            onClick={() => answersEnabled && handleClick(a)} // Verificar se as respostas estão habilitadas antes de permitir o clique
          >
            {a.description}
          </div>
        ))}
      </div>
    </div>
  )
}