/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
function itemCounts(array) {
  
  let counts ={};
  
  
  for(let i =0;i<array.length;i++){
  
    if (counts.hasOwnProperty(array[i])===false) {
        counts[array[i]]=1;
    }
    
    else{
      counts[array[i]]+=1;
  
    }
  
  }
  return counts;
  }
  
    // Your code here.
    // Run 'npm test' to see what tests need to pass.:
    // See README.md for a written description.
  
    
  
  
  if (require.main === module) {
    console.log('Running sanity checks for itemcounts:');
    console.log(itemCounts(['a','a','b','b','a','a']));
  
    // Add your own sanity checks here.
    // How else will you be sure your code does what you think it does?
  }
  
  
  
  module.exports = itemCounts;
  