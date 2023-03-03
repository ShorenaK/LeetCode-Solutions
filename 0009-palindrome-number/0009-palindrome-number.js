/**
 * @param {number} x
 * @return {boolean}
 */

// first solution when we convert it into string but it says not to convert it. 

var isPalindrome = function(x) {
    // Convert the number to a string, split the string into an array of characters,
    // reverse the array, and join the characters back into a string to get the reverse
    let reversed = x.toString().split('').reverse().join('');

    // If the original number is equal to its reverse, it's a palindrome
    return (x.toString() === reversed);
};

// second solution 

var isPalindrome = function(x) {
    // If the number is negative, it can't be a palindrome
    if (x < 0) {
        return false;
    }

    // Initialize a variable to hold the reverse of the number
    let reverse = 0;

    // Initialize a variable to hold the original number (we'll modify this in the loop)
    let num = x;

    // While the original number is not zero, keep adding digits to the reverse variable
    while (num > 0) {
        // Add the least significant digit of the original number to the reverse variable
        reverse = (reverse * 10) + (num % 10);

        // Remove the least significant digit from the original number
        num = Math.floor(num / 10);
    }

    // If the reverse of the number is equal to the original number, it's a palindrome
    return reverse === x;
};