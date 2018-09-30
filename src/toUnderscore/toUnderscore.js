export function toUnderscore(string) {
  return String(string)
  .split('')
  .map((char, i) => (
    char.match("[A-Z]") ? i === 0 ? char.toLowerCase() : `_${char.toLowerCase()}` : char
  )
  ).join('');
}