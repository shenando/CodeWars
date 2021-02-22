/*
Convert number to reversed array of digits
by emporio

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/


function digitize(n) {
  let arr = n.toString().split('').reverse()
  let finalArr = []
  
  for (i = 0; i < arr.length; i++) {
    finalArr.push(Number(arr[i]))
  }
  
  return finalArr
}