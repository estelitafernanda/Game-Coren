/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from "react";
import api from "./services/api"
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
import { useCallback } from "react";

function App() {

  const [questions, setQuestions] = useState()
  const [username, setUsername] = useState(null)
  const [state, setUserState] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("0")
  const [seconds, setSeconds] = useState(0)
  
  const timerId = useRef


  const startTimer = () =>{
    timerId.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 2000)
  }

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0
    stopSend()
  }

  const resetTimer = () => {
    stopTimer()
    if (seconds){
      setSeconds(0)
    }
  }

useEffect(() => {
  if(username && state){
    startTimer()
  }
},[username, state])

useEffect(() => {
  if (stop){
    stopTimer()

    setTimeout(() => {
    window.location.href='/'
      console.log('passou 0 segundo')
    }, 8000)
  }
}, [stop])


  const moneyPyramid = useMemo(() =>
    [
      {id: 1, amount: "100"},
      {id: 2, amount: "200"},
      {id: 3, amount: "300"},
      {id: 4, amount: "400"},
      {id: 5, amount: "500"},
      {id: 6, amount: "600"},
      {id: 7, amount: "700"},
      {id: 8, amount: "800"},
      {id: 9, amount: "900"},
      {id: 10, amount: "1000"},
      {id: 11, amount: "1100"},
      {id: 12, amount: "1200"},
      {id: 13, amount: "1300"},
      {id: 14, amount: "1400"},
      {id: 15, amount: "1500"},
      {id: 16, amount: "1600"},
      {id: 17, amount: "1700"},
      {id: 18, amount: "1800"},
      {id: 19, amount: "1900"},
      {id: 20, amount: "2000"},
      {id: 21, amount: "2100"},
      {id: 22, amount: "2200"},
      {id: 23, amount: "2300"},
      {id: 24, amount: "2400"},
      {id: 25, amount: "2500"},
      {id: 26, amount: "2600"},
      {id: 27, amount: "2700"},
      {id: 28, amount: "2800"},
      {id: 29, amount: "2900"},
      {id: 30, amount: "3000"},
      {id: 31, amount: "3100"},
      {id: 32, amount: "3200"},
      {id: 33, amount: "3300"},
      {id: 34, amount: "3400"},
      {id: 35, amount: "3500"},
      {id: 36, amount: "3600"},
      {id: 37, amount: "3700"},
      {id: 38, amount: "3800"},
      {id: 39, amount: "3900"},
      {id: 40, amount: "4000"},
      {id: 41, amount: "4100"},
      {id: 42, amount: "4200"},
      {id: 43, amount: "4300"},
      {id: 44, amount: "4400"},
      {id: 45, amount: "4500"},
      {id: 46, amount: "4600"},
      {id: 47, amount: "4700"},
      {id: 48, amount: "4800"},
      {id: 49, amount: "4900"},
      {id: 50, amount: "5000"},
      {id: 51, amount: "5100"},
      {id: 52, amount: "5200"},
      {id: 53, amount: "5300"},
      {id: 54, amount: "5400"},
      {id: 55, amount: "5500"},
      {id: 56, amount: "5600"},
      {id: 57, amount: "5700"},
      {id: 58, amount: "5800"},
    ].reverse(),
  []
  )

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  useEffect(() => {
    api.get('/questions').then(response => setQuestions(response.data))
  },[])


  // useEffect(() => {
  //   if (stop){
  //     api.post('/participant', 
  //     { 
  //       name: username, 
  //       score: parseInt(earned), 
  //       seconds: parseInt(seconds)
  //     })
  //   }
  // },[stop])

  const stopSend = useCallback(async() => {
    await api.post('/participant',
      { 
        name: username, 
        estado: state,
        score: parseInt(earned), 
        seconds: parseInt(seconds)
      })
  },[earned, seconds, username, state])


  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? 
              (
              <h1 className="endText">{username} do Estado do {state} você fez: {earned} pontos em  {seconds} segundos</h1> 
            ) : (
            <>
              <div className="top">
                <div className="timer" >
                  <Timer setStop={setStop} questionNumber={questionNumber}/>
                </div>
              </div>
              <div className="bottom">
                <Trivia 
                  data={questions} 
                  setStop={setStop} 
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber} 
                />
              </div>
            </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>        
        </>
      ) : <Start setUsername={setUsername} setUserState={setUserState} /> }
    </div>
  );
}

export default App;
