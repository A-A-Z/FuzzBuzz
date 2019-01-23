
// fuzzBuzz by Paul K Lynch
const fuzzBuzz = (start, end, ...prams) => {
  // reduce function to create line
  const getLine = (line, pram) => line + ((start % pram.number === 0) ? pram.word : '')

  // output line
  console.log(prams.reduce(getLine, '') || start)

  // repeat?
  start++;
  if (start <= end) fuzzBuzz(start, end, ...prams)
}

// demo
fuzzBuzz(1, 30, {number: 3, word: 'Fuzz'}, {number: 5, word: 'Buzz'})
