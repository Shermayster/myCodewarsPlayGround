import { toUnderscore  } from './toUnderscore';

test('should convert to string', () => {
  expect(toUnderscore(1)).toBe('1');
});

test('should convert to UpperCase to underscore', () => {
  expect(toUnderscore('TestController')).toBe('test_controller');
  expect(toUnderscore('MoviesAndBooks')).toBe('movies_and_books');
  expect(toUnderscore('App7Test')).toBe('app7_test');
  expect(toUnderscore('App7TesTT')).toBe('app7_tes_t_t');
});
