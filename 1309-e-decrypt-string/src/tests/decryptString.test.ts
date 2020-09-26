import { decryptString, numberToChar } from '../decryptString';

test('numberToChar(1)', () => {
  expect(numberToChar(1)).toBe('a');
})

test('numberToChar(10)', () => {
  expect(numberToChar(10)).toBe('j');
})
test('numberToChar(Number("1"+"0"))', () => {
  expect(numberToChar(Number("1"+"0"))).toBe('j');
})

test('numberToChar(26)', () => {
  expect(numberToChar(26)).toBe('z');
})


test('empty string', () => {
  expect(decryptString('')).toBe('');
})


test('1', () => {
  expect(decryptString('1')).toBe('a');
})

test('10#10#', () => {
  expect(decryptString('10#10#')).toBe("jj");
})

test('110#', () => {
  expect(decryptString('110#')).toBe('aj');
})

test('11#', () => {
  expect(decryptString('11#')).toMatch('k');
})


test('12345', () => {
  expect(decryptString('12345')).toBe('abcde');
})

test('10#11#12', () => {
  expect(decryptString('10#11#12')).toBe('jkab');
})

