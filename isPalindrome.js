function isPalindrome(word) {
	if(typeof(word) != 'string')
  	    return console.log('Input is not a string...')
  
	const characterArray = word.split('')
    const reversedCharacterArray = characterArray.reverse()
    const reversedWord = reversedCharacterArray.join('')
  
    if(word == reversedWord)
  	    return console.log('True')
 	
    console.log('False')
}

isPalindrome('level')
isPalindrome('racecar')
isPalindrome('palindrome')
isPalindrome(1)
isPalindrome('radar')
isPalindrome('civic')