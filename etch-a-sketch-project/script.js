const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
	const gridCell = document.createElement('div');
	gridCell.classList.add('grid-box');
	gridContainer.appendChild(gridCell);
}

function paint(box) {
	if (box && box.classList.contains('grid-box')) {
		box.style.background = 'lightgreen';
		box.style.borderColor = 'lightgreen';
	}
}

gridContainer.addEventListener('pointerdown', e => {
	e.target.releasePointerCapture(e.pointerId);
	paint(e.target);
});

gridContainer.addEventListener('pointerover', e => {
	paint(e.target);
});

gridContainer.addEventListener(
	'touchmove',
	e => {
		e.preventDefault();
		const touch = e.touches[0];
		const target = document.elementFromPoint(touch.clientX, touch.clientY);
		paint(target);
	},
	{ passive: false }
);
