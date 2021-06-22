/*
Find Twins 
by miwha1990

Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. Your task is to identify them and eliminate!

Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

If there are no twins in the city - return None or the equivalent in the language that you are using.
*/

function elimination(arr){
  let obMap = {}
  for (let char of arr) {
    if (obMap.hasOwnProperty(char)){
      obMap[char]++
    }
    else {
      obMap[char] = 1
    }
  }
  
  let newArr = Object.entries(obMap)
  let end = newArr.filter((el, i) => el[1] === 2)
  return end.length === 1 ? +end[0][0] : null
}