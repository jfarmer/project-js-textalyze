/*Sanitizes strings*/

function sanitize(text){
    let cleaned = text.toLowerCase();
    return cleaned;
}

//console.log(sanitize('This TeXt nEeds to be Sanitized. \nDoesnt matter who doES IT. \n But Please!'));

module.exports = sanitize;