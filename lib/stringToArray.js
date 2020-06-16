/*Takes a string and return array of every character in it*/
function stringChars(string){
  let chars = [];

  for(let item of string){
    chars.push(item);
  }
  return chars;
}

module.exports = stringChars;