const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array.', () => {
  test('shuffleArray should return an array.', () => {
    expect(Array.isArray(shuffleArray([1,2,3]))).toBe(true)
  });
})

describe('shuffleArray should return the same length.', () => {
  test('shuffleArray should return the same length.', () => {
    expect(shuffleArray([1,2,3]).length).toEqual(3)
    expect(shuffleArray([1,2,3,4]).length).toEqual(4)
  });
})