import { countSubstrings, countOddPalindromes, countEvenPalindromes } from './../palindromicSubstrings'

test('empty string', () => {
  expect(countSubstrings('')).toBe(0)
})

test('a', () => {
  expect(countSubstrings('a')).toBe(1)
})

test('cop-a', () => {
  expect(countOddPalindromes('a')).toBe(1)
})

test('cep-a', () => {
  expect(countEvenPalindromes('a')).toBe(0)
})

test('cep-aa', () => {
  expect(countEvenPalindromes('aa')).toBe(1)
})

test('cep-abba', () => {
  expect(countEvenPalindromes('abba')).toBe(2)
})

test('cop-abcdef', () => {
  expect(countOddPalindromes('abcdef')).toBe(6)
})

test('cop-aabcdef', () => {
  expect(countOddPalindromes('aaabcdef')).toBe(9)
})

test('cop-aabacdef', () => {
  expect(countOddPalindromes('aaabacdef')).toBe(11)
})

test('aa', () => {
  expect(countSubstrings('aa')).toBe(3)
})

test('abc', () => {
  expect(countSubstrings('abc')).toBe(3)
})

test('aaa', () => {
  expect(countSubstrings('aaa')).toBe(6)
})