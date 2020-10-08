/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */


function stringToCharacter(string) {
  let array = string.split('')
  console.log(itemCounts(array))
}

function itemCounts(array) {
  let counts = {};
  for (let item of array) {
  // if counts[item] exists, i.e., if item is a key in the counts dictionary, then...
    if (counts[item] !== undefined) {
      counts[item] = counts[item] + 1;
    } else {
      counts[item] = 1;
    }
  }
  console.log(counts)
}




  
if (require.main === module) {
  console.log('Running sanity checks for itemCounts.js')
  console.log(stringToCharacter('aaa'));
  console.log(stringToCharacter('aaaa'));
  console.log(stringToCharacter('aaaa '));
  console.log(stringToCharacter('aaaa  '));
  console.log(stringToCharacter('abcde  '));
  console.log(stringToCharacter('thepersoniscool '));
}

module.exports = itemCounts;

// start with an empty dictionary (no entries, no counts
// if we use an array in a for...of loop, we look at the elements of the array one at a time
// if we use a string in a for...of loop, we look at the characters in the string one at a time
// the syntax is identical in both cases (one of the nice things about for...of)
// in other words, replace words w/ sentence in for..of loop below and it'll work just as well