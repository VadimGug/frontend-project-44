import readlineSync from 'readline-sync'
import { greeting } from '../cli.js'

const runProgressionGame = () => {
  const userName = greeting()
  console.log('What number is missing in the progression?')
  
  const roundsToWin = 3

  for (let i = 0; i < roundsToWin; i += 1) {
    const start = Math.floor(Math.random() * 20) + 1
    const step = Math.floor(Math.random() * 10) + 2
    const length = Math.floor(Math.random() * 6) + 5
    const hiddenIndex = Math.floor(Math.random() * length)

    const progression = []
    for (let j = 0; j < length; j += 1) {
      progression.push(start + j * step)
    }

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
  
  console.log(`Conrgatulations, ${userName}!`)
}

export default runProgressionGame