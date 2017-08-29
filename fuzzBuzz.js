
// fuzzBuzz by Paul K Lynch
const fuzzBuzz = (start, end, ...prams) => {
  let output = prams.map(pram => (start % pram.number === 0) ? pram.word : '');
  let outputJoin = output.join('');

  console.log((outputJoin !== '') ? outputJoin : start);

  start++;
  if (start <= end) {
    fuzzBuzz(start, end, ...prams);
  }
}

fuzzBuzz(1, 30, {number: 3, word: 'Fuzz'}, {number: 5, word: 'Buzz'});
