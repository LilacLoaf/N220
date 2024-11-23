function checkString(str) {
  const charCount = {
    uppercase: false,
    lowercase: false,
    numeric: false,
    special: false,
  };

  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      charCount.uppercase = true;
    } else if (/[a-z]/.test(char)) {
      charCount.lowercase = true;
    } else if (!isNaN(char) && char !== " ") {
      charCount.numeric = true;
    } else if (/[@#$%^&*(),.?":{}|<>]!/.test(char)) {
      charCount.special = true;
    }
  }

  return charCount;
}

const result = checkString("HelloWorld123!");
console.log(result);

const hi = "1";
console.log(isNaN(hi));
