function loadBlankMinerPage(pool, poolData) {
	let coinName = poolData.pool.coin.name;
	let coinAlgo = poolData.pool.coin.algorithm;
	let poolPayoutScheme = poolData.pool.paymentProcessing.payoutScheme;
	let coinTicker = poolData.pool.coin.symbol;
	let poolPorts = poolData.pool.ports;
	let minPayout = poolData.pool.paymentProcessing.minimumPayment;
	let poolFee = poolData.pool.poolFeePercent;

	let connectPorts = ``;

	Object.keys(poolPorts).forEach(key => {
		connectPorts += `
      <tr>
			  <td>${poolPorts[key].name} • Diff ${poolPorts[key].difficulty}</td>
			  <td class='connection-info--poolFee'>stratum.miningpacman.pw:${key}</td>
		  </tr>
    `;
	});

	alertMessage = `
      <div class="additional-stats">
    <div class="additional-stats__item additional-stats__item--alert">
      <span class="additional-stats__item-text additional-stats__item-text--alert">
        <span class=" additional-stats__item-text--orange-title">
        Hey, miner!
        </span>

        Welcome to our <span class=" additional-stats__item-text--orange">${pool.toUpperCase()}</span> mining pool!
        Now you can see information about the network - its hashrate, difficulty and coin price. 
        As well as information about our pool.
        To continue working with the pool, you need to enter your wallet address in the field above. ⬆️
        <span class=" additional-stats__item-text--orange-title">
        Connection info
        </span>
  <table class="connection-table">
  <thead>
		<tr>
			<th>Main Info</th>
      <th></th>
		</tr>
	</thead>
	  <tbody>
		  <tr>
			  <td>Coin Name</td>
			  <td class='connection-info--coin'>${coinName} (${coinTicker})</td>
		  </tr>
		  <tr>
			  <td>Coin Algorithm</td>
			  <td class='connection-info--algo'>${
					coinAlgo == 'Ethhash' ? 'ETHASH' : coinAlgo.toUpperCase()
				}</td>
		  </tr>
		  <tr>
			  <td>Payout Scheme</td>
			  <td class='connection-info--payout'>${poolPayoutScheme}</td>
		  </tr>
		  <tr>
			  <td>Minimum Payment</td>
			  <td class='connection-info--minPay'>${minPayout} ${coinTicker}</td>
		  </tr>
    	<tr>
			  <td>Pool fee</td>
			  <td class='connection-info--poolFee'>${poolFee}%</td>
		  </tr>
	  </tbody>
      <thead>
		<tr>
			<th>Connect Info</th>
      <th></th>
		</tr>
	</thead>
  	  <tbody>
    ${connectPorts}
	  </tbody>
  </table>
      </span>
    </div>
  </div>
    `;

	$('.alertMessage').html(alertMessage);
}
