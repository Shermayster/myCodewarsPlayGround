import { formatDuration } from './formatDuration';

test('should show 1 year', () => {
  expect(formatDuration(31536000)).toBe('1 year');
})
test('should show 2 years', () => {
  expect(formatDuration(31536000 * 2)).toBe('2 years');
})
test('should show 2 years and 1 day', () => {
  expect(formatDuration(2* 31536000 + 86400)).toBe('2 years and 1 day');
});

test('should show 2 years and 1 second', () => {
  expect(formatDuration(2 * 31536000 + 1)).toBe('2 years and 1 second');
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
