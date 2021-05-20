function clicked() {
	const crossed = lines.classList.contains('cross');
	if(crossed) {
		lines.classList.add('reverse')
		lines.classList.remove('cross');
	}else {
		lines.classList.add('cross');
		lines.classList.remove('reverse');
	}
}

const lines = document.querySelector('#lines');
lines.addEventListener('click',clicked);