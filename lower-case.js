function lowerCase(str) {
    let arr = str.split('');
    let output = [];
    let temp;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
            temp = String.fromCharCode((arr[i].charCodeAt(0) + 32))
            output.push(temp)
        } else {
            output.push(arr[i])
        }
    }
    return output.join('')
}


// It should log -> UHOO
console.log(
    lowerCase('uhoo'),
);

// It should log -> "tiens tiens tiens ..."
console.log(
    lowerCase('Tiens Tiens Tiens ...'),
);

// It should log -> "c'est reparti comme en 46"
console.log(
    lowerCase("C'EST REPARTI COMME EN 46"),
);