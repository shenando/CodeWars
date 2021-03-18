/*
Holiday II - Plane Seating 
by PG1

Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/

function planeSeat(a){
  let arr = a.split('')
  let letter = arr.pop()
  let num = Number(arr.join(''))
  let finalArr = []
  
  if (num <= 20) {
    finalArr.push('Front-')
  } else if (num <= 40) {
    finalArr.push('Middle-')
  } else if (num <= 60) {
    finalArr.push('Back-')
  } else {
    finalArr.push('No Seat!!')
  }
  
  if (letter == 'A' || letter == 'B' || letter == 'C') {
    finalArr.push('Left')
  } else if (letter == 'D' || letter == 'E' || letter == 'F') {
    finalArr.push('Middle')
  } else if (letter == 'G' || letter == 'H' || letter == "K") {
    finalArr.push('Right')
  } else {
    finalArr.push('No Seat!!')
  }
  
   return (finalArr.includes('No Seat!!') == true) ? 'No Seat!!' : finalArr.join('')
}