/*
Simple Pig Latin
by user2505876

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  let arr = str.split(' ')
  let finalArr = []
  let regex = /[\w\s]/gi
  for (i = 0; i < arr.length; i++) {
    if (arr[i].match(regex) != null) {
      finalArr.push(arr[i].slice(1) + arr[i][0] + 'ay')
    } else {
      finalArr.push(arr[i])
    }
  }
  return finalArr.join(' ')
}