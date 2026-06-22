function ceasarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const ceasarAlphabet = shiftAlphabet(alphabet, shift);
  return encryptStr(str, ceasarAlphabet, alphabet);
}

function shiftAlphabet(alphabet, shift) {
  if (shift > 25 || shift < 0) {
    throw new Error("shift can't exceed num 26 and be below 0");
  }
  return alphabet.slice(shift).concat(alphabet.slice(0, shift));
}

function encryptStr(str, shiftedAlphabet, lowerCaseAlphabet) {
  let encryptedStr = "";
  const arrStr = [...str];

  arrStr.forEach((char) => {
    if (isUpperCase(char)) {
      const index = lowerCaseAlphabet.toUpperCase().indexOf(char);
      encryptedStr += shiftedAlphabet[index].toUpperCase();
    } else if (lowerCaseAlphabet.indexOf(char) === -1) {
      encryptedStr += char;
    } else {
      const index = lowerCaseAlphabet.indexOf(char);
      encryptedStr += shiftedAlphabet[index];
    }
  });

  return encryptedStr;
}

function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

export default ceasarCipher;
