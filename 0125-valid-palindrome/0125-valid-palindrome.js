/**
 * @param {string} s
 * @return {boolean}
 */


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// to have two pinters 

// l. r. pointer
// l incrument and decremnt r 
//  l     r
//    l  r
//     lr
//.     r
//.    r l

// 1) clean string 
// 2) lowercase string.toLowerCase()
// 3) check if palimdrome

const check = (s) =>{
    let l = 0 
    let r = s.length-1
 while(l<=r){
    if(s[l]===s[r]){
        l++
        r--
    }else{
        return false 
    }
 }
 return true
}

var isPalindrome = function(s){
  const regex = /[^a-zA-Z0-9]/g
  const clean = s.replace(regex, '').toLowerCase()
  return check(clean)
}