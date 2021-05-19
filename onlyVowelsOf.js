function onlyVowelsOf(word) {
    if(typeof(word) != 'string')
  	    return 'Input is not a string...'
    
	var characterArray = word.split('')
    var vowelArray = ['a', 'e', 'i', 'o', 'u']
  
    const onlyVowelsArray = characterArray.filter(item => 
        (vowelArray.includes(item)))
 
    return onlyVowelsArray
}

const word = 'thisissomeword'
const wordWithOnlyVowels = onlyVowelsOf(word)
console.log(wordWithOnlyVowels)

console.log(onlyVowelsOf('hello'))
console.log(onlyVowelsOf(1))
console.log(onlyVowelsOf('vowelsonly'))