/*
[Code Golf] Return Odd No Matter What
by ilya_plotnikov

Description:
Given the integer n return odd numbers as they are, but subtract 1 from even numbers.

Note:

Your solution should be 22 or less characters long.

Examples
Input  = 2
Output = 1

Input  = 13
Output = 13

Input  = 46
Output = 45
*/
alwaysOdd=n=>n&1?n:n-1