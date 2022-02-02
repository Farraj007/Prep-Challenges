'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let last = str.lastIndexOf(' ')
    if (last == -1){
        return str
    }
    else {
        return str.slice(last + 1)
    }
    // write your code here
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    var lw= str.split(" ");
    return lw[lw.length -1];
    // write your code here
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
//    let arr= str.split("")
//    if (arr[0] == "I" && (arr[1]="was")){
//        arr[0]="We" 
//        arr[1]="were"
//    } else if(arr[0]=="I") {arr[0]="We"}
    // write your code here
    // str=str.replace(/I/g,"We")
    // str=str.replace((/I/g,"We") && (/was/g,"were"))
    if ((str.includes("I"))&&(str.includes("was"))){
        str=str.replace(/I/g,"We")
        str=str.replace(/was/g,"were")
    } else{str=str.replace(/I/g,"We");str=str.replace(/am/g,"are")}
    // str=str.replace(/I/g,"We")
    // str=str.replace(/was/g,"were")
    // str=str.replace(/am/g,"are") commented works also
    
    return str
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    arr = arr.slice(0,5).join(' ')+","+arr.slice(4,arr.length).join(' ')    
    arr = arr.splice(4,1,'')
//   for (let i=0 ;i<4;i++){
//     arr=arr[i].join(' ')
//   }
 return arr
    // write your code here
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };