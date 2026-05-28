import { STORAGE_KEY, getTodoData } from './storageService.js';

function addTask(taskObj) {
	const data = getTodoData();
	data.tasks.push(taskObj);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}