async function balanceChanges() {
	const balanceChangesFetch = await fetch(
		`https://api.miningpacman.pw/api/pools/${currentPool}/miners/${currentAddress}/balancechanges`
	);
	const balanceHistory = await balanceChangesFetch.json();

	let tableContent = ``;

	Object.keys(balanceHistory).forEach(key => {
		tableContent += `
		<tr>
    <td>${new Date(balanceHistory[key].created).toLocaleString()}</td>
			<td>${balanceHistory[key].amount}</td>
      <td>${balanceHistory[key].usage}</td>
		</tr>
		`;
	});

	$('.stat-tabs__content-item--balanceChanges').html(tableContent);
}
