'use strict';

function upperCase(str) {
    let arr = str.split('');
    let output = [];
    let temp;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
            temp = String.fromCharCode((arr[i].charCodeAt(0) - 32))
            output.push(temp)
        } else {
            output.push(arr[i])
        }
    }
    return output.join('')
}


// It should log -> UHOO
console.log(
    upperCase('uhoo'),
);