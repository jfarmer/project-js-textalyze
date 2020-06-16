/*Calculates the frequencies of characters in a supplied text*/
function frequencies(charArray){
    let itemCounts = require('./itemCounts');
    let sum = 0;
    let counts = itemCounts(charArray);    
    let statistics = itemCounts(charArray);
    for(let item of Object.keys(counts)){
        sum += counts[item];
    }
    console.log('sum', sum);
    console.log('hopefully the frequencies of chars:');
    for (let item of Object.keys(counts)){
        console.log(statistics[item]);
        statistics[item] = (statistics[item]/sum * 100).toPrecision(4);
    }
    return statistics;
}

module.exports = frequencies;