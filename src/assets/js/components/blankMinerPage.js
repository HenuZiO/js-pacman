function loadBlankMinerPage(pool) {
  alertMessage = `
      <div class="additional-stats">
    <div class="additional-stats__item">
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
        <table class="iksweb">
	<tbody>
		<tr>
			<td>Coin Name</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Coin Algorithm</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Pool Wallet</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Payout Scheme</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Minimum Payment</td>
			<td>5</td>
		</tr>
    		<tr>
			<td>Pool fee</td>
			<td>6</td>
		</tr>
	</tbody>
</table>
      </span>
    </div>
  </div>
    `;

  $('.alertMessage').html(alertMessage);
}
