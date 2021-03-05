/*
Find the odd int
By rbuckley

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  let array = A
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  for (i = 0; i < array.length; i++) {
    if (getOccurrence(array, array[i]) % 2 != 0) {
      return array[i]
    }
  }
}