/*
Exes and Ohs
By joh_pot

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  let arr = str.split('')
  let xarr= []
  let oarr= []
  
  for (i = 0; i < str.length; i++) {
    if (arr[i] === 'x' || arr[i] === 'X') {
      xarr.push(arr[i])
    } else if (arr[i] === 'o' || arr[i] === 'O') {
      oarr.push(arr[i])
    }
  }
 
 return xarr.length === oarr.length ? true : false
}