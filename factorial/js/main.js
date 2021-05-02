/*
Factorial 
by wichu

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

function factorial(n){
  let arr = []
  for (i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.length < 1 ? 1 : arr.reduce((a,b) => a*b)
}