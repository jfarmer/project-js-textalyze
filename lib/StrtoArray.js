function StrtoArray(string){

    return string.split('');
}
if (require.main === module) {
    console.log('Running sanity checks for itemcounts:');
    console.log(StrtoArray('hello world!'));
  
    // Add your own sanity checks here.
    // How else will you be sure your code does what you think it does?
  }
  
  
  
  module.exports = StrtoArray;
  