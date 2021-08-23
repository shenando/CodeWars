/*
Love vs Friendship
by J or nor J

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string){
  let abcs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let stringArr = string.split('')
  let final = []
  for (let i = 0; i<string.length;i++) {
    final.push(abcs.indexOf(stringArr[i])+1)
  }
  return final.reduce((a,b) => a+b)
}