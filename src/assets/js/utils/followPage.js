const followPage = link => {
	let href = link.replace('?', '');

	window.location.assign(href);
};
