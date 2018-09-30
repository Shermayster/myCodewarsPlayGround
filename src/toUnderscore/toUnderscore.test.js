import { toUnderscore  } from './toUnderscore';

test('should convert to string', () => {
  expect(toUnderscore(1)).toBe('1');
})
