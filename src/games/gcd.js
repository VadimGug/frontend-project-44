import readlineSync from 'readline-sync'
import { greeting } from '../cli.js'
import { getRandomInt } from '../randomInt.js'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const runGcdGame = () => {
  const userName = greeting()
  console.log('Find the greatest common divisor of given numbers.')

  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i += 1) {
    const num1 = getRandomInt(1, 100)
    const num2 = getRandomInt(1, 100)

    const correctAnswer = getGcd(num1, num2).toString()

    console.log(`Question: ${num1} ${num2}`)
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

export default runGcdGame
