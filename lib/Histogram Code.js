
function itemFrequency(array) {
    let characterFrequency = {};
    let totalCount = 0
    
  
    for (let item of array) {
        totalCount+= 1
      if (!characterFrequency[item]) {
        characterFrequency[item] = 1;
      } else {
        characterFrequency[item] += 1;
      }
    } for (let keys of Object.keys(characterFrequency)) {

        characterFrequency[keys]= (characterFrequency[keys]/totalCount)*100 
        
    }
    for (let values of Object.keys(characterFrequency)) {
        charKey= characterFrequency[values];
    }

    for (let keys of Object.keys(characterFrequency)){
    let symbols=':';
    //console.log(keys);
    let values = characterFrequency[keys];
    for (a=0; a<values; a+=1 ){
            symbols = symbols + ')'; 
    }

    
    console.log(`${keys}: ${values} % ${symbols}`);
}
}

console.log(itemFrequency(['h', 'e', 'y','y', 'e', 'e']));
