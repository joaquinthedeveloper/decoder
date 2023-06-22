// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === undefined || shift === 0 || shift === -26 || shift === 26) {
      return false;
    }

    input = [...input.toLowerCase()];
    return input
      .map((char) => {
        let indexOfChar = alphabet.indexOf(char);
        if (indexOfChar === -1){
          return char;
        }
        if (encode && indexOfChar + shift > 25){
          return alphabet[indexOfChar + shift - 26];
        }
        if (!encode && indexOfChar - shift < 0){
          return alphabet[indexOfChar - shift + 26]
        }
        return encode
          ? alphabet[indexOfChar + shift]
          : alphabet[indexOfChar - shift];
      })
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
