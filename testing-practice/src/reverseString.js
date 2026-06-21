function reverseString(str) {
  const arr = Array.from(str);
  const reverse = [];
  for (let i = arr.length; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  return reverse.join("");
}

export default reverseString;
