// Function Addition
function sumAll() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);

// Function for Subtraction
function subtraction(num1, num2) {
  var result = num2 - num1;
  return result;
}

// Function for Multiplication
function multiplication () {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
// document.getElementById("demo2").innerHTML = multiplication(2, 3, 4, 5, 6, 7);

// Function for Division
function division(num2, num1) {
  var result = num2 / num1;
  return result;
}
var res = division(10, 5);
console.log(res);

