let mask = document.querySelector('.preloader');

window.addEventListener('load', () => {
	setTimeout(() => {
		mask.remove();
		mask.classList.add('preloader--hide');
	}, 1000);
});
