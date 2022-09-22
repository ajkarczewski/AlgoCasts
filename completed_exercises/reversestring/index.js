// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }

// ^^ new syntax for loops -- good for problems like this, but wouldn't work if you wanted to loop through every third or fourth element

// variable declaration (let character)
// iterable object (characters of str)
// set each character = temporary variable (character)
// take that character and add it on to the beginning of the st reversed
// after for loop => entire string is reversed
