let process = require('process');
var fs = require('fs');

function openAndRead() {
  let fileName = process.argv[2];

  if (!fs.existsSync(fileName)) {
    console.log(`Error: your file doesn't exist, I received ${fileName}`);
    process.exit();
  } let text = fs.readFileSync(fileName, 'utf-8');
  return text;
}

if (require.main === module) {
  console.log(openAndRead());
}
// console.log(openAndRead('../sample_data/great-gatsby.txt'));
