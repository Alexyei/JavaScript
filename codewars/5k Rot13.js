// function Rot13(str) {
//     let alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let alphabetLow = alphabetUp.toLowerCase();
//     let result = "";
//     const k = 13;
//
//     return str.reduce((result, char, index) => alphabetUp.includes(char) ? result.push(alphabetUp[(index + k) % alphabetUp.length]) :, "");
//
// }

function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return str.replace(/[A-Z]/g,char=>alphabet[(alphabet.indexOf(char)+13)%26]).replace(/[a-z]/g,
                      char=>alphabet[(alphabet.indexOf(char.toUpperCase())+13)%26].toLowerCase());

}

console.log(rot13("TeSt!"));
