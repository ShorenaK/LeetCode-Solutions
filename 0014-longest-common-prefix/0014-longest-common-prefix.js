/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
    
// };



function longestCommonPrefix(strs) {
  // Check if input is valid
  if (!strs || !strs.length) {
    return "";
  }
  // Find the shortest string in the array
  let shortestStr = strs.reduce((acc, str) => acc.length < str.length ? acc : str);
  // Loop through each character of the shortest string
  for (let i = 0; i < shortestStr.length; i++) {
    // Compare the character with the same character of each string in the array
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== shortestStr[i]) {
        // Return the longest common prefix up to the current character index
        return shortestStr.substring(0, i);
      }
    }
  }
  // If all characters match, return the entire shortest string as the longest common prefix
  return shortestStr;
}