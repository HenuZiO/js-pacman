async function dailyRewards() {
	const rewardDataFetch = await fetch(
		`https://api.miningpacman.pw/api/pools/${currentPool}/miners/${currentAddress}/earnings/daily`
	);
	const rewardData = await rewardDataFetch.json();

	let tableContent = ``;

	Object.keys(rewardData).forEach(key => {
		tableContent += `
    <tr>
			<td>${rewardData[key].amount}</td>
			<td class="connection-info--coin">${new Date(
				rewardData[key].date
			).toLocaleString()}</td>
		</tr>
    `;
	});

	if (rewardData.length) {
	}

	$('.stat-tabs__content-item--dailyRewards').html(tableContent);
}
