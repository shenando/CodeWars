/*
Homogenous arrays
by lilsweetcaligula

Challenge:

Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

Example:

Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:

Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

The resultant arrays should be in the order they were originally in and should not have its values changed.

No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.
*/

function filterHomogenous(arrays) {
  var ans = [];

  for (var i = 0; i < arrays.length; i++) {
    if ( arrays[i].length >= 1 ) {
      var char_type = typeof arrays[i][0];

      for (var j = 0; j < arrays[i].length; j++) {
        var match = true;
        if ( !(typeof arrays[i][j] == char_type) ) {
          match = false;
          break;
        }
      }
      if (match == true) {
        ans.push(arrays[i]);
      }
    }
  }
  return ans;
}