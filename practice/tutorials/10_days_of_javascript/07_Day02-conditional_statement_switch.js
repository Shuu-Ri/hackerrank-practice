'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// ----------------- Solution 1: ---------------- 
function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
        
    }
    
    return letter;
}
// ---- End of Solution 1 --

// -- Solution 2: --
const vowels = new Set('aeiou');
const b = new Set('bcdfg');
const c = new Set('hjklm');
const d = new Set('npqrstvwxyz');

function getLetter(s) {
    let letter;

    // Write your code here
    switch (true) {
        case (vowels.has(s[0])):
            letter = 'A';
            break;
        case (b.has(s[0])):
            letter = 'B';
            break;
        case (c.has(s[0])):
            letter = 'C';
            break;
        case (d.has(s[0])):
            letter = 'D';
            break;
        default:
            letter = "Undefined!";
            break;
    }
    
    return letter;
}
// End of solution 2 --

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}