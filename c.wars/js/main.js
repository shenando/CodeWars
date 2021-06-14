/*
C.Wars
debri

Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.
*/
function initials(n){
  let arr = n.split(' ')
  let final = arr.map(el => el[0].toUpperCase()) + arr[arr.length-1].slice(1)
  return final.split(',').join('.')
}