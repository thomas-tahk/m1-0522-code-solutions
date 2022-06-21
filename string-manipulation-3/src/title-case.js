/* exported titleCase */
// define function named titleCase
// with parameter title
// assign small words like propositions, conjunctions, and articles to variable minorWords
// assign the title split by spaces into variable titleWords
// assign an empty array to variable titleCased
// iterate through titleWords
// lowercase titleWords and save that to variable named loweredWord
// check if lowered word is 'javascript'
//  if so, push 'JavaScript' to titleCased
// check if lowered word is 'api'
//  if so, push 'API' to titleCased
// check if loweredWord can be found in minorWords and if it's not at beginning of the loweredWord and if it isn't following ':' from previous word
//  then push loweredWord to titleCased
// check if there's a hyphen in loweredWord,
//  then capitalize the character immediately following hyphen
//  and push rest of the loweredWord as it normally should be to titleCased
// other than all the conditions listed above,
//  capitalize the first character of loweredWord and concatenate the rest of loweredWord then push the result to titleCased
// return titleCased converted to string

function titleCase(title) {
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var titleWords = title.split(' ');
  var titleCased = [];
  for (let i = 0; i < titleWords.length; i++) {
    const loweredWord = titleWords[i].toLowerCase();
    if (loweredWord.includes('javascript')) {
      if (loweredWord.length > 10) {
        titleCased.push('JavaScript' + loweredWord.slice(10));
      } else {
        titleCased.push('JavaScript');
      }
    } else if (loweredWord === 'api') {
      titleCased.push('API');
    } else if (minorWords.includes(loweredWord) && (i > 0 && !titleWords[i - 1].includes(':'))) {
      titleCased.push(loweredWord);
    } else if (loweredWord.includes('-')) {
      const hyphenIndex = loweredWord.indexOf('-');
      titleCased.push(loweredWord[0].toUpperCase() + loweredWord.slice(1, hyphenIndex + 1) + loweredWord[hyphenIndex + 1].toUpperCase() + loweredWord.slice(hyphenIndex + 2));
    } else {
      titleCased.push(loweredWord[0].toUpperCase() + loweredWord.slice(1));
    }
  }
  return titleCased.join(' ');
}

// define function named titleCase
// with parameter title
// assign small words like propositions, conjunctions, and articles placed in an array to variable minorWords
// assign the title split by spaces into variable titleWords
// assign an empty array to variable titleCased
// iterate through titleWords using for loop
//  lowercase titleWords and save that to variable named loweredWord
//  check if loweredWord includes 'javascript'
//    if it does and the length exceeds that of 'javascript'
//    then push concatenation of 'JavaScript' and the remainder of loweredWord to titleCased
//    otherwise push 'JavaScript' to titleCased
// check if lowered word is 'api'
//    if so, push 'API' to titleCased
// check if loweredWord can be found in minorWords and if it's not at beginning of the loweredWord and if it isn't following ':' from previous word in titleWords
//    then push loweredWord to titleCased
// check if there's a hyphen in loweredWord,
//    find the index where the hyphen occurs and save that to variable hyphenIndex
//    then capitalize the character immediately following hyphen
//    and push concatenation of:
//        capitalized first character, slice of loweredWord from second character to the hyphen, capitalized character following hyphen, slice of remainder of lowerWord
// other than all the conditions listed above,
//    capitalize the first character of loweredWord and concatenate this to the rest of loweredWord then push the result to titleCased
// return titleCased converted to string by join with argument ' '
