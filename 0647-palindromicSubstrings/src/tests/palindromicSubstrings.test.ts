import { countSubstrings } from './../palindromicSubstrings'

test('empty string', () => {
  expect(countSubstrings('')).toBe(0)
})

test('a', () => {
  expect(countSubstrings('a')).toBe(1)
})

test('aa', () => {
  expect(countSubstrings('aa')).toBe(2)
})

test('abc', () => {
  expect(countSubstrings('abc')).toBe(3)
})

test('aaa', () => {
  expect(countSubstrings('aaa')).toBe(6)
})