/*
Count characters in your string
by riston

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
  let objMap = {}
  for (let letter of string) {
    if(objMap.hasOwnProperty(letter)) {
      objMap[letter]++
    } else {
      objMap[letter] = 1
    }
  }
  
  return objMap
}