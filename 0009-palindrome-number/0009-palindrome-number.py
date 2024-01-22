class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Convert the integer to a string
        str_x = str(x)
        
        # Compare the string with its reverse
        return str_x == str_x[::-1]

# Example usage:
# Create an instance of the Solution class
solution = Solution()

# Check if 121 is a palindrome
result = solution.isPalindrome(121)
print(result)  # Output: True

# Check if -121 is a palindrome
result = solution.isPalindrome(-121)
print(result)  # Output: False
        