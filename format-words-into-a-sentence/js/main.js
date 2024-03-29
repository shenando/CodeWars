/*
Format words into a sentence
by jhoffner

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""
*/

function formatWords(words){
  if (words === null || words.length < 1 ) {
    return ''
  } else if (words.length <= 1 && words[0] === '') {
    return ''
  }
  
  let noBlanks = words.filter(el => el !== '')
  let listLeng = noBlanks.length

  return listLeng === 1 ? noBlanks[0] 
        : listLeng === 2 ? noBlanks.join(' and ') 
        : noBlanks.join(', ').replace(/,\s([^,]+)$/, ' and $1')
}