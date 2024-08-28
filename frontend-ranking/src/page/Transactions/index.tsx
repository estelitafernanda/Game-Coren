import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TransactionsContainer, TransactionsTable } from "./styles";

interface Transactions {
  id: number
  name: string
  score: number
  seconds: number
}
export function Transactions() {

  const [transactions, setTransactions] = useState<Transactions[]>([])

  const [counter, setCounter] = useState(0)

  
  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/participants')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  },[counter])

  useEffect(() => {
    let interval: number | undefined

    const updateCounter = () => {
      setCounter(currentValue => currentValue + 1)
    }

    interval = setInterval(() => {
      updateCounter()
    }, 5000)

    return () => {
      // Clear the interval when component is unmounted
      clearInterval(interval)
    }
  }, [])



  return (
    <div>
      <Header />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.name}</td>
                  <td>{transaction.score}</td>
                  <td>{transaction.seconds} segundos</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}