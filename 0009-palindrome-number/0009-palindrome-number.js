/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let reversed = x.toString().split('').reverse().join('')
//     return (x.toString() === reversed)
// };

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let reverse = 0;
    let num = x;
    while (num > 0) {
        reverse = (reverse * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reverse === x;
};