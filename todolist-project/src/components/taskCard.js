function taskCard(taskObj, onDelete, onEdit) {
	const { id, title, dueDate, priority } = taskObj;
	const card = document.createElement('div');
	const deleteBtn = document.createElement('button');
	const updateBtn = document.createElement('button');

	card.innerHTML = `
	    <label>
	      <input type="checkbox" class="checkbox">
	      <span class="task-title">${title}</span>
	    </label>
		  <p>${dueDate}</p>
		  <p>${priority}</p>
		`;

	const checkBox = card.querySelector('.checkbox');

	deleteBtn.textContent = 'Delete Task';
	updateBtn.textContent = 'Update Task';

	checkBox.addEventListener('change', e => {
		const taskTitle = e.target.closest('label').querySelector('.task-title');
		
		if (e.target.checked) {
			taskTitle.style.textDecoration = 'line-through';
		} else {
			taskTitle.style.textDecoration = 'none';
		}
	});

	deleteBtn.addEventListener('click', () => {
		onDelete(id);
		card.remove();
	});
	updateBtn.addEventListener('click', () => {
		onEdit(id);
	});

	card.appendChild(deleteBtn);
	card.appendChild(updateBtn);

	return card;
}

export default taskCard;
