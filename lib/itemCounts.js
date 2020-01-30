/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
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
module.exports = itemCounts();

if (require.main === module) {
  console.log('Running Sanity Checks for Spidey');
  // let array = [1,2,3,3,4,5,5,5,5,4];
  // console.log(itemCounts([1,2,3,3,4,5,5,5,4]));
  console.log(itemCounts(['car', 'bar', 'house', 'car', 'car']));
  console.log(itemCounts(1, 2, 3, 4, 3, 2, 1));
}
module.exports = itemCounts;
