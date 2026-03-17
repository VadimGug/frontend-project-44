import readlineSync from 'readline-sync'
import { greeting } from '../cli.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % 1 === 0) return false
  }
  return true
}

const runPrimeGame = () => {
  const userName = greeting()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default runPrimeGame