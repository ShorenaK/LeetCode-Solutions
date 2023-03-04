/**
 * @param {string} s
 * @return {boolean}
 */

 // if statement
 // create stack 
 // create variable 
var isValid = function(s) {
 // data structor object
    // object to reference the string 
    let bracket = {
        '(':')', 
        '[':']', 
        '{':'}'
    }
    let heap = []
// storage machanzmin // hip structure lasat one in first one to compare 
  for(let char of s ){
    if(bracket[char]){
heap.push(bracket[char])
    }else{
        if(heap.pop() !== char){
            return false
        }
    }
  }
  return (!heap.length)
};






// let string = ''
//     if(s.includes("()")){
//         return string += s
//     }