/*
Find the capitals
by ankr

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
  let arr = word.split('')
  let re = new RegExp(/([A-Z])/g)
  let caps = word.match(re)
  let finalArr = []
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < caps.length; j++) {
      if(arr[i] === caps[j]) {
        finalArr.push((word.indexOf(arr[i])))
      }
    }
  }
  return finalArr
}