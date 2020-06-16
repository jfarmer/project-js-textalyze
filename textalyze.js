// This is the base code for v0.1 of our JavaScript text analyzer.
// Visit https://github.com/jfarmer/project-js-textalyze to see what to do.

let itemCounts = require('./lib/itemCounts');
let sanitize = require('./lib/sanitize');
let stringChars = require('./lib/stringToArray');
let fs = require('fs');
let frequencies = require('./lib/frequencies');

let text = fs.readFileSync(`${process.argv.slice(2,3)}`, 'utf8');
//let text = fs.readFileSync('./sample_data/tale-of-two-cities.txt', 'utf8');
let cleanedStr = sanitize(text);
let characters = stringChars(cleanedStr);
let freqs = frequencies(characters);
let counts = itemCounts(characters);

console.log(freqs);


for (let item of Object.keys(counts)) {
  let count = counts[item];

  console.log(`${item}\t${count}`);
}
