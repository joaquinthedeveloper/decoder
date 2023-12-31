// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    input = [...input.toLowerCase()];
    alphabet = [...alphabet.toLowerCase()];
    const alpha = [..."abcdefghijklmnopqrstuvwxyz"];
    return input
      .map((char) => {
        if (encode) {
          const indexOfChar = alpha.indexOf(char);
          if (indexOfChar === -1) {
            return char;
          }
          return alphabet[indexOfChar];
        }

        const indexOfChar = alphabet.indexOf(char);
        if (indexOfChar === -1) {
          return char;
        }
        return alpha[indexOfChar];
      })
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
