// This is the base code for v0.1 of our JavaScript text analyzer.
// Visit https://github.com/jfarmer/project-js-textalyze to see what to do.

// Send a message in Slack if you're stuck or unsure what to do.  These
// comments are here to help you, but please delete them as you go along.

// Open lib/itemCounts.js to get started on the first iteration.
let itemCounts = require('./lib/itemCounts');

let sampleInput = ['a', 'a', 'a', 'b', 'b', 'c'];

let counts = itemCounts(sampleInput);

// Object.keys returns an array of keys for the given object.
// See https://javascript.info/keys-values-entries
for (let item of Object.keys(counts)) {
  let count = counts[item];

  console.log(`${item}\t${count}`);
}
