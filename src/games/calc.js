import runEngine from '../index.js'

const description = 'What is the result of the expression?'
const operators = ['+', '-', '*']

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+': return x + y
    case '-': return x - y
    case '*': return x * y
    default: throw new Error(`Unknow operator: ${operator}`)
  }
}

const getRandomInt = max => Math.floor(Math.random() * max)

const generateRound = () => {
  const num1 = getRandomInt(50)
  const num2 = getRandomInt(50)
  const operator = operators[getRandomInt(operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const answer = String(calculate(num1, num2, operator))

  return [question, answer]
}

export default () => runEngine(description, generateRound)
