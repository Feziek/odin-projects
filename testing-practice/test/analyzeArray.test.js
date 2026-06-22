import analyzeArray from "../src/analyzeArray";

test("analyze the array and return average, min, max, length properties", () => {
  const input = [1, 8, 3, 4, 2, 6];
  const output = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(analyzeArray(input)).toEqual(output);
});
