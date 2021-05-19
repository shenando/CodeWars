/*
String reverse slicing 101
by mkelty

You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

Examples
'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
*/

function reverseSlice(str) {
  let arr = []
  let turnip = str.split('').reverse().join('')
  for (i = 0; i <= turnip.length; i++) {
      if (turnip.length > 1) {
        arr.push(turnip.slice(i))
      }
  }

  return arr.filter(el => el != '')
}