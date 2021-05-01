/*
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

function camelize(str) {
  let camelCase = str.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
 return str[0] === '-' ? camelCase : camelCase[0].toLowerCase() + camelCase.slice(1)
}