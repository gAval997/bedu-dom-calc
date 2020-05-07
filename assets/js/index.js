const buttons = document.querySelectorAll('[type="button"]');
let memory = [];
let input_value = 0;
let chosen_op = '';
let result = 0;

[...buttons].forEach((button) => {
	button.addEventListener('click', (e) => {
		const value = e.target.value;

		if (parseInt(value) || value === '.' || value === '0') {
			let old_value = document.querySelectorAll('#screen')[0].value;
			document.querySelectorAll('#screen')[0].value = `${old_value}${value}`;
		} else {
			switch (value) {
				case 'all-clear':
					document.querySelectorAll('#screen')[0].value = "";
					result = 0;
					memory = [];
					break;
				case '=':
					input_value = document.querySelectorAll('#screen')[0].value;
					memory[1] = parseFloat(input_value);
					switch (chosen_op) {
						case '+':
							result = memory[0] + memory[1];
							break;
						case '-':
							result = memory[0] - memory[1];
							break;
						case '*':
							result = memory[0] * memory[1];
							break;
						case '/':
							result = memory[0] / memory[1];
							break;
						default:
							result = "UNEXPECTED, CHECK CONSOLE";
							break;
					}
					memory[0] = result;

					document.querySelectorAll('#screen')[0].value = result;
					break;
				default:
					input_value = document.querySelectorAll('#screen')[0].value;
					memory[0] = parseFloat(input_value);
					document.querySelectorAll('#screen')[0].value = '';
					chosen_op = value;
					break;
			}
		}
	});
});
