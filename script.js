let selectBox = document.querySelector('.select-box');
let xBtn = document.querySelector('.playerX');
let oBtn = document.querySelector('.playerO');
let gameBoard = document.querySelector('.game-board');
let boxes = [...document.querySelectorAll('.box')];

let clickedXBtn = (xBtn.onclick = () => {
	xBtn.classList.add('selected');
	oBtn.classList.add('hide');
});

let clickedOBtn = (oBtn.onclick = () => {
	oBtn.classList.add('selected');
	xBtn.classList.add('hide');
});

xBtn.addEventListener('click', clickedXBtn);
oBtn.addEventListener('click', clickedOBtn);

clickedBox = (element) => {
	if (clickedXBtn.classList.contains('selected')) {
		element.innerHTML = '<i class="fas fa-times"></i>';
	} else {
		element.innerHTML = '<i class="far fa-times"></i>';
	}
};

boxes.forEach((box) => box.addEventListener('Click', clickedBox));
