console.log(longestZero("01100001011000")); // ➞ "0000"
 
console.log(longestZero("100100100")); // ➞ "00"
 
console.log(longestZero("11111")); // ➞ ""
 

function longestZero(binary) {
    return binary.split('1').sort().pop()
}

/*
function longestZero(binary) {
    let show = binary.split("1");
    show.sort(function (one, two){
        return two.length - one.length; 
    })
    return show[0];
}
*/