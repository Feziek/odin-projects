import ceasarCipher from "../src/ceasarCipher";

test("the string should shifted correctly", () => {
  const input = {
    str: "xyz",
    shift: -1,
  };
  const output = "abc";

  expect(ceasarCipher(input.str, input.shift)).toBe(output);
});

test("the string should preserve the original lettercase", () => {
  const input = {
    str: "HeLLo",
    shift: 3,
  };
  const output = "KhOOr";

  expect(ceasarCipher(input.str, input.shift)).toBe(output);
});

test("the string punctuation should remain unchanged", () => {
  const input = {
    str: "Hello, World!",
    shift: 3,
  };
  const output = "Khoor, Zruog!";

  expect(ceasarCipher(input.str, input.shift)).toBe(output);
});
