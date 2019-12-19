let container = document.querySelector('.container');
let width = 44;
let delay = 0;

container.style.width = width + 'vmin';
container.style.height = width + 'vmin'

for (let squares = 0; squares < 22 ; squares++){
	let div = document.createElement('div');
	div.className = 'squares';
	div.style.width = width + 'vmin';
	div.style.height = width + 'vmin';
	div.style.animationDelay = delay + 'ms';
	width -= 2;
	delay += 30;
	container.appendChild(div);
}