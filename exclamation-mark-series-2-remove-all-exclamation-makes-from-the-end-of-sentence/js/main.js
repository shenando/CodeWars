/*
Exclamation marks series #2: Remove all exclamation marks from the end of sentence
by myjinxin2015

Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(s){

  let arr = s.split('');
  
  while (arr[arr.length-1] === '!') {
  
      arr.pop()
  
  }
  
  return arr.join('')
  
    
  }