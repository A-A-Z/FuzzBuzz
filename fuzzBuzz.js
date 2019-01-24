
/**
 * A version of the classic FuzzBuzz test.
 * @author Paul K Lynch <dramatichamster@gmail.com>
 * @param {number} start - Number to start on (or the current number).
 * @param {number} end - The max number to count up to.
 * @param {...Object} prams - Config of what numbers to replace and with what words.
 */
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
