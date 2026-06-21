import capitalize from "../src/capitalize";

test("capitalize the first letter in the string", () => {
  const name = "joseph";
  const capitalizedName = "Joseph";

  expect(capitalize(name)).toMatch(capitalizedName);
});
