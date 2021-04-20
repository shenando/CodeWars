/*
Removing Elements
by MorgzC41

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
  let newArr= []
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i) % 2 === 0) {
      newArr.push(arr[i])
    }
  }
  
  return newArr
}