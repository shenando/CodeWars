/*
Remove consecutive duplicate words
by e.mihaylin

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => s.split(' ').filter((el,i,arr) => arr[i-1] != el).join(' ')