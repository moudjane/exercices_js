'use strict';
const regex = /[A-Za-z']+/gm

function countWords(str){
    const count = {};
    const word = str.match(regex);
    
    for (let i = 0; i < word.length; i++){
        count[word[i].toLowerCase()] = (count[word[i].toLowerCase()] || 0 ) + 1 ;
    };
    return count;
};

// It should log -> { "are": 1, "you": 1, "the": 1, "queen": 1 }
console.log(
    countWords('Are you the queen ?'),
  );