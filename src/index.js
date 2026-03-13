import readlineSync from 'readline-sync'

const roundsCount = 3

export default (description, getRoundData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have youe name? ')
  console.log(`Hello, ${name}`)
  console.log(description)

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRoundData()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}