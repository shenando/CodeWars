/*Price of Mangos
by AartiK1

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/

function mango(quantity, price){
  let arr = []
  for (i=2; i<quantity; i+=3) {
    arr.push(1)
  }
  if (quantity<0) {
    return 0
  } else if (quantity == 1) {
    return price
  } else if (quantity == 2) {
    return price *2
  } else {
   return (quantity - arr.reduce((a,b)=>a+b)) * price
  }
}