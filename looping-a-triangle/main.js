/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function triangle() {
  let sym = '';
  for (let i = 0; i < 7; i++) {
    sym += '#'
    console.log(sym)
  }
}

triangle()

function triangle2() {
  let sym = '';
  for (let i = 0; sym.length < 7; i++) {
    sym += '#'
    console.log(sym)
  }
}

triangle2()

/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/



let amount = 8;
let row = [];
let board = [];
for (let i = 1; i <= amount; i++) {
  if (i % 2 == 0) {
    row.push('#')
  } else (
    row.push(' ')
  )

  if (i % amount == 0) {
    row.push('\n')
  }
}

for (let j = 1; j <= amount; j++) {
  if (j % 2 == 0) {
    row.push(' ')
  } else (
    row.push('#')
  )

  if (j % amount == 0) {
    row.push('\n')
  }
}

let finalRow = row.join('')

for (let k = 1; k <= amount / 2; k++) {
  board.push(finalRow);
}
console.log(board.join(''))