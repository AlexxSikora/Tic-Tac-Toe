let selectBox = document.querySelector('.select-box');
let xBtn = document.querySelector('.playerX');
let oBtn = document.querySelector('.playerO');
let gameBoard = document.querySelector('.game-board');
let boxes = [...document.querySelectorAll('.box')];

let playerX = 'fas fa-times';
let playerO = 'far fa-circles';

clickedXBtn = () => {
	xBtn.classList.add('selected');
	oBtn.classList.add('hide');
};

clickedOBtn = () => {
	oBtn.classList.add('selected');
	xBtn.classList.add('hide');
};

xBtn.addEventListener('click', clickedXBtn);
oBtn.addEventListener('click', clickedOBtn);

//powinien dodawać się X na planszy,  jeśli się wyżej wybrało X jako swoją figurkę
boxes.forEach((box) =>
	box.addEventListener('click', function clickedBox(element) {
		if (xBtn.classList.contains('selected')) {
			element.innerHTML = `<i class= "${playerX}"></i>`;
		} else {
			element.innerHTML = `<i class= "${playerO}"></i>`;
		}
	})
);
