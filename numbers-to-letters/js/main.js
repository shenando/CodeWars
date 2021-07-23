/*
Numbers to Letters
by PG1

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x){
  let dict = {
    ' ': '29',
    '?': '28',
    '!': '27',
    'a': '26',
    'b': '25',
    'c': '24',
    'd': '23',
    'e': '22',
    'f': '21',
    'g': '20',
    'h': '19',
    'i': '18',
    'j': '17',
    'k': '16',
    'l': '15',
    'm': '14',
    'n': '13',
    'o': '12',
    'p': '11',
    'q': '10',
    'r': '9',
    's': '8',
    't': '7',
    'u': '6',
    'v': '5',
    'w': '4',
    'x': '3',
    'y': '2',
    'z': '1'
  }
  
  let arr = []
  
  for (let i = 0; i < x.length; i++){
    Object.entries(dict).map(el => {
      if (el[1] === x[i]) {
        arr.push(el[0])
      }
    })
  }
  
  return arr.join('')
}