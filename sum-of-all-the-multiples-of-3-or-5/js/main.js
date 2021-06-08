/*
Sum of all the multiples of 3 or 5
wichu

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

function findSum(n) {
  let arr = []
  for (i = 1; i <= n; i++) {
    arr.push(i)
  }
  
  let filtered = arr.filter(el => el % 3 === 0 || el % 5 === 0)
  return filtered.reduce((a,b) => a+b)
}