// //Include Inquirer package

// const fs = require('fs');

// function intit() {
//     const data = fs.readFileSync('./0912.txt', { encoding: 'utf8' }); 
//     const lines = data.split("\n"); 
//     const cleanData = lines.map(getData).filter(x => x != undefined); 
//     console.log(cleanData);  
// };

// function getData(line) {
//     line = line.split(" "); 
//     if (line[11] == " ") {
//         line[11] = "_"; 
//         line[12] = "_"
//     }

//     const words = getWords(line);

//     if (words[0] != " " && !isNaN(words[0]) && words.length === 9) {
//         const [sr, ext, misc, jun, dir, date, time, duration, amt] = words; 
//         return {
//             sr, ext, misc, jun, dir, date, time, duration, amt
//         }
//     }
// }

// function getWords(line) {
//     const separators = [" ", "\r"]; 

//     let current = 0; 
//     let cleanLine = []; 

//     while (current < line.length) {
//         const char = line[current]; 

//         if (!separators.includes(char)) {
//             cleanLine.push(char);
//         } else if (!separators.includes(cleanLine[cleanLine.length - 1])) {
//             cleanLine.push(char); 
//         }
//         current++; 
//     }
//     return cleanLine.join("").trim().split(" "); 
// }

// intit();

const fs = require('fs');

const filename = '0912.txt';
const keyword = 'directory';

const data = fs.readFileSync(filename, 'utf8');
const lines = data.split('\n');

const matchingLines = lines.filter(line => line.toLowerCase().includes(keyword));

console.log(matchingLines);
