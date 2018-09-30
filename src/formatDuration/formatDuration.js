
  const formatsMap = new Map([
    ['year', 31536000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ]);

  const getText = (number, text) =>  number === 1 ? text : `${text}s`;
  const calculateFormatValue = (seconds, formatValueInSeconds) => Math.floor(seconds/formatValueInSeconds);

export function formatDuration (seconds) {
  // Complete this function
  return Array.from(formatsMap.keys()).reduce((prev, currentFormat) => {
    if (prev.seconds >= formatsMap.get(currentFormat)) {
      const formatValue = calculateFormatValue(prev.seconds,  formatsMap.get(currentFormat));
      prev.seconds  = calculateRestSeconds(prev, currentFormat, formatValue);
      prev.formatData.push({name: currentFormat, value: formatValue});
    }
    return prev;
  }, {formatData: [], seconds: seconds})
  .formatData.map(format => {
      return `${format.value} ${getText(format.value, format.name)}`
  })
  .reverse()
  .reduce((result, currentFormat, index) => {
      return index === 0 ? `${currentFormat}` :
      index === 1 ? `${currentFormat} and ${result}` :
      `${currentFormat}, ${result}`
  }, '');
}


function calculateRestSeconds(prev, currentFormat, formatValue) {
  return prev.seconds - (formatsMap.get(currentFormat) * formatValue);
}

