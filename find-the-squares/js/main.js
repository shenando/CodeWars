/*
Find the Squares
by Myestery

Problem
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
*/

const findSquares = num => {
  let arr = []
  for (i = 1; i <= num; i++) {
    arr.push(i*i)
  }
  
  let finalArr = []
  
  for (j = 0; j < arr.length; j++) {
    if (arr[j+1] - arr[j] === num) {
      finalArr.push(arr[j+1])
      finalArr.push(arr[j])
    }
  }
  return finalArr.join('-')
};