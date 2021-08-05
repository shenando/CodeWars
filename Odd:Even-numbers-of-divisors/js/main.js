/*
Odd/Even number of divisors
by sergeyn

Given an integer n return "odd" if the number of its divisors is odd. Otherwise return "even".

Note: big inputs will be tested.

Examples:
All prime numbers have exactly two divisors (hence "even").

For n = 12 the divisors are [1, 2, 3, 4, 6, 12] – "even".

For n = 4 the divisors are [1, 2, 4] – "odd".
*/

function oddity(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n) + 1; i++)
  {
      if (n % i == 0)
          count += (Math.floor(n / i) == i) ? 1 : 2;
  }

  return count % 2 == 0 ? 'even' : 'odd'
}