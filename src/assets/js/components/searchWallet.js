function searchWalletData() {
	let userQuery = document.querySelector('#searchWallet-input').value;

	if (userQuery.length > 0) {
		localStorage.setItem(currentPool + '-enteredSearchWallet', userQuery);
	}

	let href = `#${currentPool}/dashboard/${userQuery}`.replace('?', '');

	window.location.assign(href);
	window.location.reload();
}
