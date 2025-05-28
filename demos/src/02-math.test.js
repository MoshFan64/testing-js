const {sum, multiply, divide, average, subtract, isEven} = require('./02-math.js')

test("add 1 + 3 should be 4", () => {
  const result = sum(1,3);
  expect(result).toBe(4)
});

test("should be 4", () => {
  const result = multiply(1,4);
  expect(result).toBe(4)
});

test("should divide", () => {
  const result = divide(6,3);
  expect(result).toBe(2)
  //TODO: RESOLVE TEST CASE WHEN A VALUE IS NaN
  const result2 = divide(6,"sgsgkhgkj");
  expect(result2).toBeNaN()
  const result3 = divide(6,0);
  expect(result3).toBeNull()
});

test("Average of 3, 7, and 11", () => {
  const values = [3, 7, 11];
  const result = average(values);
  expect(result).toBe(7)
})

test("Average of nothing would be 0", () => {
  const values = [];
  const result = average(values);
  expect(result).toBe(null)
})

//Pruebas del examen
test("The subtraction of 10 minus 3 should be 7", () => {
  const result = subtract(10,3);
  expect(result).toBe(7);
})

test("The subtraction of 3 minus 10 should be -7", () => {
  const result = subtract(3,10);
  expect(result).toBe(-7);
})

test("The number 2 is an even number.", () => {
  const result = isEven(2);
  expect(result).toBe(true);
})

test("The number 5 is an odd number.", () => {
  const result = isEven(5);
  expect(result).toBe(false);
})

test("The number 0 is an even number.", () => {
  const result = isEven(0);
  expect(result).toBe(true);
})
