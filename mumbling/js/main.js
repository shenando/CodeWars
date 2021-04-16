/*
Mumbling
by g964

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let arr = []
  let newS = s.split('')
  for (i = 0; i < newS.length; i++) {
    let count = i
    for (j = -1; j <i; j++){
      arr.push(newS[i])
    }
  arr.push('-')
  }
  
  let finalS = arr.join('').split('-')
  let finalArr = []
  for (k = 0; k < finalS.length; k++){
    finalArr.push(finalS[k] = finalS[k].charAt(0).toUpperCase() + finalS[k].substr(1).toLowerCase())
  }
  return finalArr.join('-').slice(0, -1)
}