import { formatDuration } from './formatDuration';

test('should show 1 year', () => {
  expect(formatDuration(31556926)).toBe('1 year');
})
test('should show 2 years', () => {
  expect(formatDuration(63113852)).toBe('2 years');
})
test('should show 2 years and 2 month', () => {
  expect(formatDuration(68373340)).toBe('2 years and 2 months');
});

test('should show 2 years, 2 month and 1 second', () => {
  expect(formatDuration(68373341)).toBe('2 years, 2 months and 1 second');
})
test('1 second',() => {
  expect(formatDuration(1)).toBe('1 second');
});
test('1 minute and 2 seconds',() => {
  expect(formatDuration(62)).toBe('1 minute and 2 seconds');
});
test('2 minutes',() => {
  expect(formatDuration(120)).toBe('2 minutes');
});
test('1 hour',() => {
  expect(formatDuration(3600)).toBe('1 hour');
});
