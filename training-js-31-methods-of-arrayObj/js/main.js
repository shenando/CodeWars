/*
Task
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Examples
blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 

*/
function blackAndWhite(arr){
  if (Array.isArray(arr) != true) {
    return 'It\'s a fake array'
  } else {
    return arr.toString(' ').indexOf(5) != -1 && arr.toString(' ').indexOf(13) != -1 ? 'It\'s a black array' : 'It\'s a white array'
  }
}