/*
Regex Validate PIN Code
by JMurphyWeb

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN (pin) {
  let arr = pin.split('')
  let newArr = arr.map(el => +el)
  let finalArr = newArr.filter(el => isNaN(el) === false).join('')
  console.log(finalArr, pin)
  return finalArr === pin && pin.length === 4 ? true : finalArr === pin && pin.length === 6 ? true : false
}