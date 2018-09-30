
export function formatDuration (seconds) {
  // Complete this function
  const formats = ['year', 'month', 'day', 'hour', 'minute', 'second'];
  const fr
  const formatsData = {
    year: {
      inSeconds: 31556926,
      name: 'year'
    },
    month: {
      inSeconds: 2629744,
      name: 'month'
    },
    day: {
      inSeconds: 86400,
      name: 'day'
    },
    hour: {
      inSeconds: 3600,
      name: 'hour'
    },
    minute: {
      inSeconds: 60,
      name: 'minute'
    },
    second: {
      inSeconds: 1,
      name: 'second'
    }
  }
  return formats.reduce((prev, currentFormat) => {
    if (prev.seconds >= formatsData[currentFormat].inSeconds) {
      const formatValue = Math.floor(prev.seconds / formatsData[currentFormat].inSeconds);
      const updatedSeconds = prev.seconds - (formatsData[currentFormat].inSeconds * formatValue);
      prev.seconds = updatedSeconds;
      prev.formatData.push({name: formatsData[currentFormat].name, value: formatValue});
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
function getText(number, text) {
  return number === 1 ? text : `${text}s`
}
