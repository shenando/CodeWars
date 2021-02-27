/*
No Oddities Here
by ineiti

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
*/

function noOdds( values ){
  let newArr = []
  values.forEach(element => {
    element % 2 === 0 ? newArr.push(element) : ''
  })
  return newArr
}