import calculator from "../src/calculator";

const calc = calculator();

test("perform addition: 1 + 2 to equal 3", () => {
  const input = {
    a: 1,
    b: 2,
  };
  const output = 3;

  expect(calc.add(input.a, input.b)).toBe(output);
});
test("perform subtraction: 5 - 2 to equal 3", () => {
  const input = {
    a: 5,
    b: 2,
  };
  const output = 3;

  expect(calc.subtract(input.a, input.b)).toBe(output);
});
test("perform multiply: 2 * 2 to equal 4", () => {
  const input = {
    a: 2,
    b: 2,
  };
  const output = 4;

  expect(calc.multiply(input.a, input.b)).toBe(output);
});
test("perform division: 10 / 2 to equal 5", () => {
  const input = {
    a: 10,
    b: 2,
  };
  const output = 5;

  expect(calc.divide(input.a, input.b)).toBe(output);
});
