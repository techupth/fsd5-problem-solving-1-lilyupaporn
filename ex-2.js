//Exercise 2: Valid Palindrome
const isPalindrome = function (string) {
  //Start Coding here
  let backwardString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === "," || string[i] === ":") {
      string = string.slice(0, i) + string.slice(i + 1);
      i--;
      string = string.toLowerCase();
      console.log(string);
    }
  }

  for (let i = string.length - 1; i >= 0; i--) {
    backwardString += string[i];
  }
  return string === backwardString;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
