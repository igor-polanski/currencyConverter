{

	const calculateResult = (amount, currency) => {
		const plnRate = 4.93;
		const eurRate = 1.1;
		const usdRate = 1.23;

		switch (currency) {
			case 'PLN':
				return amount * plnRate;

			case 'EUR':
				return amount * eurRate;

			case 'USD':
				return amount * usdRate;

		}
	};

	const updateResultText = (amount, result, currency) => {
		const resultElement = document.querySelector('.js-result');

		resultElement.innerHTML = `${amount.toFixed(2)} GBP = ${result.toFixed(2)} ${currency}`;
	}

	const onFormSubmit = (event) => {
		event.preventDefault();

		const amountElement = document.querySelector('.js-amount');
		const currencyElement = document.querySelector('.js-currency');

		const amount = +amountElement.value;
		const currency = currencyElement.value;

		const result = calculateResult(amount, currency);

		updateResultText(amount, result, currency);
	};

	const init = () => {
		const formElement = document.querySelector('.js-form');

		formElement.addEventListener('submit', onFormSubmit );
	};

	init();
};