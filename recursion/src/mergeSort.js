// Pseudocode for merge sort:
// Sort the left side
// Sort the right side
// Merge sorted sub arrays

function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  const subLeft = arr.slice(0, mid);
  const subRight = arr.slice(mid);

  const left = mergeSort(subLeft);
  const right = mergeSort(subRight);

  const result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else if (left[i] > right[j]) {
      result.push(right[j++]);
    } else {
      result.push(left[i++]);
    }
  }

  for (let a = i; a < left.length; a++) {
    result.push(left[a]);
  }

  for (let b = j; b < right.length; b++) {
    result.push(right[b]);
  }

  return result;
}
