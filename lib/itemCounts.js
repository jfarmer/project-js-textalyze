
//let process = require('process');
let fs = require('fs');

function openAndRead() {

  let text = fs.readFileSync( process.argv[2] , 'utf-8');
  return text;
}
if (require.main === module) {
console.log(openAndRead(process.argv[2]));
}
// console.log(openAndRead('../sample_data/great-gatsby.txt'));
//   if (!fs.existsSync(fileName)) {
//     console.log(`Error: your file doesn't exist, I received ${fileName}`);
//     process.exit();