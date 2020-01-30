/* i want to create an object(entries) that will give me back [key, value] where key=element in the array and value= the number
* of occurrences
*/

function itemCounts(array) {
  let counts = {};
  for (let element of array) {
    if (!counts[element]) {
      counts[element] = 1;
    } else {
      counts[element] += 1;
    }
  }
  return counts; // counts
}

module.exports = itemCounts;
