const { TestScheduler } = require('jest')
const { generateText, checkAndGenerate } = require('./util')

test('should output name and age', () => {
  const text = generateText('Max', 29)
  expect(text).toBe('Max (29 years old)')

  const text2 = generateText('Anna', 28)
  expect(text2).toBe('Anna (28 years old)')
})

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29)
  expect(text).toBe('Max (29 years old)')
})