console.log(mapping(["p", "s"])); // { "p": "P", "s": "S" }
 
console.log(mapping(["a", "b", "c"])); // { "a": "A", "b": "B", "c": "C" }
 
console.log(mapping(["a", "v", "y"])); // { "a": "A", "v": "V", "y": "Y"}

function mapping(arr) {
    let obj = {};
    arr.map( str =>{
        obj[str] = str.toUpperCase()
    })
    return obj
}