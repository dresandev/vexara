export const getRandomNumbers = (length: number = 8, max: number = 7): number[] => {
  if (length > max + 1) {
    throw new Error('The length of the array cannot be greater than the range of possible numbers')
  }

  const availableNumbers: number[] = Array.from({ length: max + 1 }, (_, i) => i)
  const result: number[] = []

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * availableNumbers.length)
    const selectedNumber = availableNumbers.splice(randomIdx, 1)[0]
    result.push(selectedNumber)
  }

  return result
}
