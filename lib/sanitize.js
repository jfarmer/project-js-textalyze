
let string = 'THE man FrOm TexAs Is TalL'
function sanitize(string){
    let sanitizedString = string.toLowerCase()
    console.log(sanitizedString)
    return sanitizedString
}

if (require.main === module) {
    console.log('Running sanity checks for sanitize.js')
    console.log(sanitize('THE man FrOm TexAs Is TalL'));

}

module.exports = sanitize