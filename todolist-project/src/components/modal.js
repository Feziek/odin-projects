function displayModal(onSubmit) {
	const modal = document.createElement('form');
	const confirmBtn = document.createElement('button');
	const cancelBtn = document.createElement('button');
	modal.innerHTML = `
	  <label for="title">Title</label>
	  <input type="text" id ="title" required>
	  <label for="date" >Due date</label>
	  <input type="date" id="date" required>
	  <label for="prio">Priority level</label>
 	  <select id="prio">
 	  <option value="" selected>Select an option...</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
	`;

	confirmBtn.addEventListener('click', e => {
		e.preventDefault();

		const formData = {
			title: document.getElementById('title').value,
			dueDate: document.getElementById('date').value,
			priority: document.getElementById('prio').value
		};

		onSubmit(formData);
		modal.reset();
		modal.remove();
	});

	cancelBtn.addEventListener('click', e => {
		e.preventDefault();
		modal.reset();
		modal.remove();
	});

	confirmBtn.textContent = 'Confirm';
	cancelBtn.textContent = 'Cancel';

	modal.appendChild(confirmBtn);
	modal.appendChild(cancelBtn);

	return modal;
}

export default displayModal;
