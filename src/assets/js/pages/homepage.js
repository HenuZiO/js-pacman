function loadHomePage(data) {
	const uniquePoolAlgo = Array.from(
		new Set(
			data.map(el => {
				return el.coin.algorithm;
			})
		)
	);

	let sortedCoinBlock = ``;

	uniquePoolAlgo.forEach(value => {
		coinFilterResult = data.filter(element => {
			return element.coin.algorithm == value;
		});

		let algoPoolHashrate = coinFilterResult.map(
			pool => pool.poolStats.poolHashrate
		);
		let totalAlgoHashrate = formatHash(
			algoPoolHashrate.reduce((sum, pool) => sum + pool),
			5,
			'H/s'
		);

		sortedCoinBlock += `
    <div class="coin-sort__container">
     <section class="coin-sort">
     <div class="coin-sort__left">
     <h4 class="coin-sort__title">
     <span class='text-orange'>${
				value == 'Ethhash' ? 'ETHASH' : value.toUpperCase()
			}</span> algorithm
     </h4></div>

     <div class="coin-sort__right">
     <span class='text-orange'> ${totalAlgoHashrate} </span>
     </div>
     </section></div>

     <div class="coin-item__container" id="pool-coins">
     `;

		$.each(coinFilterResult, function (index, value) {
			let coinLogoHTML =
				"<img class='coin-item__top-img' src='https://miningpacman.pw/img/coin/icon/" +
				value.coin.type.toLowerCase() +
				".png' />";

			let coinName = value.coin.name.split('-')[0];
			let coinTicket = value.coin.symbol;
			let coinAlgo =
				value.coin.algorithm == 'Ethhash'
					? 'ETHASH'
					: value.coin.algorithm.toUpperCase();

			if (typeof coinName === 'undefined' || coinName === null) {
				coinName = value.coin.type;
			}

			sortedCoinBlock += `
        <section class='coin-item' href='#${value.id}/dashboard/'>
          <div class='coin-item__top-inner'>
            ${coinLogoHTML}
            <h3 class='coin-item__top-title'>${coinName} (${coinTicket})
            ${
							coinTicket == 'OCTA'
								? `<span class='coin-item__pac'>+ $PAC</span>`
								: ''
						}
            </h3>
          </div>
          <div class="coin-item__main">
            <ul class="coin-item__main-list">
              <li class="coin-item__main-item">
                <span>Algorithm</span>
                <span class="coin-item__main-item--right">
                  ${coinAlgo}
                </span>
              </li>
                            <li class="coin-item__main-item">
                <span>Block Height</span>
                <span class="coin-item__main-item--right">${
									value.networkStats.blockHeight
								}</span>
              </li>
              <li class="coin-item__main-item">
                <span>Miners</span>
                <span class="coin-item__main-item--right">
                  ${value.poolStats.connectedMiners}
                </span>
              </li>
              <li class="coin-item__main-item">
                <span>Pool H/s</span>
                <span class="coin-item__main-item--right">
                  ${formatHash(value.poolStats.poolHashrate, 5, 'H/s')}
                </span>
              </li>
              <li class="coin-item__main-item">
                <span>Network H/s</span>
                <span class="coin-item__main-item--right">
                  ${formatHash(value.networkStats.networkHashrate, 5, 'H/s')}
                </span>
              </li>
              <li class="coin-item__main-item">
                <span>Network diff.</span>
                <span class="coin-item__main-item--right">
                  ${formatHash(value.networkStats.networkDifficulty, 5, '')}
                </span>
              </li>
              <li class="coin-item__main-item">
                <span>Payout system</span>
                <span class="coin-item__main-item--right">
                  ${value.paymentProcessing.payoutScheme}
                </span>
              </li>

            </ul>
          </div>
        </section>`;
		});

		sortedCoinBlock += `</div>`;
	});

	$('.algoCoinsBlock').html(sortedCoinBlock);

	$(document).ready(function () {
		$('.coin-item').on('click', function (event) {
			let href = $(this).attr('href');
			if (href) {
				window.location.href = href;
				window.location.reload();
			}
		});
	});
}
