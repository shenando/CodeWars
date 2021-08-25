/*
L2: Triple X

Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

function tripleX(str){
  let arr = str.split('')
  let idx = arr.indexOf('x')
  let subArr = arr.splice(idx, 3)
  return subArr.filter(el => el == 'x').length === 3
}
