function peek(stack){
    return stack[stack.length -1] // getting the last value
}

var isValid = function (s) {
    const hashMap = { "(": ")", "{": "}", "[": "]"};
    const stack = [];
    for (let ch of s) {
      if (hashMap[ch]) {
        // ch is an opening bracket  stack[stack.length - 1]
        stack.push(hashMap[ch]); //push each character of the passed string to an array
      } else if (stack.length > 0 && peek(stack)  === ch) {//checking if the string is not emptyi and the last
        // ch is a closing bracket and top of stack matches
        stack.pop();
        return true
      } else {
        // ch is a closing bracket and top of the stack doesn't match
        return false;
      }
    }
    return stack.length === 0;
  };

  
  console.log("Example1: " + isValid("(5+6)*(7+8)/(4+3)"))
  console.log("Example2: " + isValid("((5+6)*(7+8)/(4+3)"))
  console.log("Example3: " + isValid("{[}]"))
console.log("Example4: " + isValid("{{(){}}}"))
   console.log("Example5: " + isValid("{{({)}}}"))
