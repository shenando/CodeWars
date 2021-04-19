/*
Sum of number from 0 to N
by Javatlacati

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let arr = []
    for (i = 0; i <= count; i++) {
        arr.push(i) 
    }
    
    if (count < 0) {
      arr.push(count)
    }
    
    let total = arr.reduce((a, b) => a + b).toString()
    let work = arr.join('+').toString()
    
    return count > 0 ? `${work} = ${total}` : count === 0 ? '0=0' : arr.join('') + '<0'
  };

  return SequenceSum;

})();