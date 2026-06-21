import reverseString from "../src/reverseString";

test("should reverse the string passed in the function", () => {
  const value = "coffee";
  const expectedValue = "eeffoc";

  expect(reverseString(value)).toMatch(expectedValue);
});
