import runEngine from '../index.js'
import { getRandomInt } from '../randomInt.js'

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

const generateRound = () => {
  const num1 = getRandomInt(1, 50)
  const num2 = getRandomInt(1, 50)
  const operator = operators[getRandomInt(0, operators.length - 1)]

  const question = `${num1} ${operator} ${num2}`
  const answer = String(calculate(num1, num2, operator))

  return [question, answer]
}

export default () => runEngine(description, generateRound)
