/*
FizzBuzz Backwards
by marbiru

Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

Examples
Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
[1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
Multiples of 2 are replaced by Fizz and Buzz:
[1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
Fizz = 1, Buzz = 6:
["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]
*/

function reverseFizzBuzz(array) {
  let fizz = []
  let buzz = []
  let fizzBuzz = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Fizz') {
      fizz.push(array.indexOf(array[i]) +1)
    } else if (array[i] === 'Buzz') {
      buzz.push(array.indexOf(array[i]) +1)
    } else if (array[i] === 'FizzBuzz') {
      fizzBuzz.push(array.indexOf(array[i]) + 1)
    }
  }
  console.log(fizz, buzz, fizzBuzz)
  
  let arrFinal = []
  
  if (fizzBuzz.length === 0) {
    arrFinal.push(fizz[0], buzz[0])
  } else if (fizz.length === 0 && buzz.length === 0) {
    arrFinal.push(fizzBuzz[0], fizzBuzz[1])
  } else if (fizz.length === 0) {
    arrFinal.push(fizzBuzz[0], buzz[0])
  } else if (buzz.length === 0) {
    arrFinal.push(fizz[0], fizzBuzz[0])
  } else {
    arrFinal.push(fizz[0], buzz[0])
  }
  
  return arrFinal
};