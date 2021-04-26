/*
Geometry Basics: Triangle Area in 2D
by taw

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating area of a Triangle defined this way.

Tests round answers to 6 decimal places.
*/

function triangleArea(triangle){
  let a = triangle.b.x - triangle.a.x
  let b = triangle.b.y - triangle.a.y
  let c = triangle.c.x - triangle.a.x
  let d = triangle.c.y - triangle.a.y
  let e = triangle.c.x - triangle.b.x
  let f = triangle.c.y - triangle.b.y

  let side1 = Math.sqrt( a*a + b*b )
  let side2 = Math.sqrt( c*c + d*d )
  let side3 = Math.sqrt( e*e + f*f )
  
  let s = (side1 + side2 + side3)/2
  return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
}