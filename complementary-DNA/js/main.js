/*
Complementary DNA
by JustyFY

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input: output)

DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" 
*/

function DNAStrand(dna){
  let dict = {
    'A' : 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
  }

  let letters = dna.split('')
  
  let arr = []
  
  for(let i = 0; i < letters.length; i++){
    Object.entries(dict).map(el => {
      if (el[0] === letters[i])
        arr.push(el[1])
    })
  }
    
  return arr.join('')
}