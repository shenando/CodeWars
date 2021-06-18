/*
Substituting Variables Into Strings: Padded Numbers
by jhoffner

Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

function solution(value){
  return value <= 9 ? `Value is 0000${value}` : value <= 99 ? `Value is 000${value}` : value <= 999 ? `Value is 00${value}` : value <= 9999 ? `Value is 0${value}` : `Value is ${value}`
}