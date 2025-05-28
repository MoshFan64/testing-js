function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

const average = (values) => {
  if(values.length === 0) return null;
  return values.reduce((a,b) => a + b) / values.length;
}

function subtract(a, b) {
  return a - b;
}

function isEven(n) {
  if(n % 2 === 0) return true;
  else return false;
}

module.exports = {sum, multiply, divide, average, subtract, isEven};
