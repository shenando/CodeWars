/*
Remove duplicate words
by e.mihaylin

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
  let words = s.split(' ')
  let wordMap = {}
  
  for (let word of words) {
    if (wordMap.hasOwnProperty(word)) {
        wordMap[word]++
    } else {
        wordMap[word] = 1
    }  
  }
  
  return Object.keys(wordMap).join(' ')
}