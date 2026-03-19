import readlineSync from 'readline-sync'
import { greeting } from '../cli.js'
import { getRandomInt } from '../randomInt.js'

const runProgressionGame = () => {
  const userName = greeting()
  console.log('What number is missing in the progression?')
  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i += 1) {
    const start = getRandomInt(1, 20)
    const step = getRandomInt(1, 10)
    const length = getRandomInt(5, 8)

    const progression = []
    for (let j = 0; j < length; j += 1) {
      progression.push(start + j * step)
    }
    const hiddenIndex = getRandomInt(0, progression.length - 1)

    const correctAnswer = String(progression[hiddenIndex])

    progression[hiddenIndex] = '..'
    const question = progression.join(' ')

    console.log(`Question: ${question}`)
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

export default runProgressionGame
