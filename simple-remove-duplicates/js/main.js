/* 
Simple remove duplicates
by KenKamau

In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
*/

function solve(arr){
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) === i) {
      newArr.push(arr[i])
    }
  }
  return newArr
}