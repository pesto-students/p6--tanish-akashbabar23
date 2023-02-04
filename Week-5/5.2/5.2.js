/*
* Write a function called vowelCount which accepts a string and 
* returns a map where the keys arenumbers and the values are the count of the vowels in the string.
*/

// Creating a function for vowelCount
function checkVowel(char) {
    return "aeiou".includes(char);
}

let vowelMap = new Map();
function countVowel(str) {
    let count = 1;
    for (const s of str) {  
        let char = s.toLowerCase();
        if (checkVowel(char)) {
            if (vowelMap.has(char)) {
                let ct = vowelMap.get(char)
                vowelMap.set(char, ++ct);
            } else {
                vowelMap.set(char, count);
            }
        } 
    } 
    return vowelMap;
}

console.log(countVowel("Pesto Student"));