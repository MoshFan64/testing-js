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

module.exports = {sum, multiply, divide, average};
