const fibs = n => {
	if (n === 0) return [0];
	let result = [0, 1];
	for (let i = 2; i < n; i++) {
		const length = result.length;
		result.push(result[length - 1] + result[length - 2]);
	}

	return result;
};

const fibsRec = n => {
  if (n === 0) return [0]
	if (n <= 2) return [0, 1];
	const result = fibsRec(n - 1);
	const nextNum = result[result.length - 1] + result[result.length - 2];
	result.push(nextNum);

	return result;
};

export { fibs, fibsRec };
