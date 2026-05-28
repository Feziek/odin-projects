const STORAGE_KEY = 'todolist';

function getTodoData() {
	const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
		tasks: [],
		projects: []
	};

	return data;
}

export { STORAGE_KEY, getTodoData };
