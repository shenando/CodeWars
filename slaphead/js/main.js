/*
Slaphead
by PG1

Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
*/

function bald(x){
  let balded = x.split('').filter(el => el === '-')
  let totalHairs = x.length - balded.length
  for (i = 0; i < totalHairs; i++) {
    balded.push('-')
  }
  let finalArr = []
  finalArr.push(balded.join(''))
  
  if (totalHairs === 0) {
    finalArr.push('Clean!')
  } else if (totalHairs === 1) {
    finalArr.push('Unicorn!')
  } else if (totalHairs === 2) {
    finalArr.push ('Homer!')
  } else if (totalHairs <= 5 ) {
    finalArr.push('Careless!')
  } else {
    finalArr.push('Hobo!')
  }
  
  return finalArr
}