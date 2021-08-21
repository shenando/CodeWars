/*
Regexp Basics - is it a digit?
by taw

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function() {
  let reg = /^[0-9]*$/
  let num = Object.values(this).join('')
  return num.match(reg) !== null && num !== '' && num < 10 ? true : false
};