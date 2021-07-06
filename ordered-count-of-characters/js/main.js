/*
Ordered Count of Characters
by suic

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

var orderedCount = function (text) {
  // Implement me!
  const splitStr = text.split('');
  const str = [...new Set(splitStr)];
  
  let resultArr = [];
  
  for (let i = 0; i <= str.length-1; i += 1) {
    resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
  }
  
  return resultArr;
}