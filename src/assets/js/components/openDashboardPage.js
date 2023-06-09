function openDashboardPage() {
	let href = '#' + currentPool + '/dashboard/';
	$('.understats-line__item--back').attr('href', `${href}`);

	$(document).ready(function () {
		window.location.href = href;
		window.location.reload();
	});
}
