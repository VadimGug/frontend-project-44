import readlineSync from 'readline-sync'
import { greeting } from '../cli.js'

const runEvenGame = () => {
  const userName = greeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runEvenGame