export const getRandomNumbers = (length: number = 8, max: number = 7): number[] => {
  if (length > max + 1) {
    throw new Error('La longitud del array no puede ser mayor que el rango de números posibles')
  }

  const availableNumbers: number[] = Array.from({ length: max + 1 }, (_, i) => i)
  const result: number[] = []

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length)
    const selectedNumber = availableNumbers.splice(randomIndex, 1)[0]
    result.push(selectedNumber)
  }

  return result
}
