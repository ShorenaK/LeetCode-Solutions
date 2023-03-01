/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i ++){
//         for (let j = i +1 ; j < nums.length; j ++){
//             sum = nums[i] + nums[j]
//             if (sum === target){
//                 return [i, j]
//             }
//         }
//     }
// };



function twoSum(nums, target) {
  // Create an empty object to store the numbers in the array and their indices
  const hash = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number
    const complement = target - nums[i];

    // If the complement is in the hash table, return the indices of the two numbers
    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    }

    // Add the current number to the hash table with its index as the value
    hash[nums[i]] = i;
  }

  // If no pair of numbers adds up to the target, return an empty array
  return [];
}