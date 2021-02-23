/* 
Pick a set of first elements 
by: darlanmendonca

Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

function first(arr, n) {
  if (n === undefined) {
    const arr2 = []
    arr2.push(arr[0])
    return arr2
  } else {
    return arr.slice(0, n)
  }
}

function first(arr, n) {
  return n === undefined ? Array.from(arr[0]) : arr.slice(0, n)
}