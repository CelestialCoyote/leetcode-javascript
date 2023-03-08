/******
 * @param {string}
 * @returns {number}
 *****/

const romanToInt = (romanString) => {
	const romanHash = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	const stringArray = [...romanString];
	let number = 0;

	for (let i = 0; i < romanString.length; i++) {
		if (romanString[i] === 'I' && romanString[i + 1] === 'V') {
			number += 4;
			i++
		} else if (romanString[i] === 'I' && romanString[i + 1] === 'X') {
			number += 9;
			i++
		} else if (romanString[i] === 'X' && romanString[i + 1] === 'L') {
			number += 40;
			i++;
		} else if (romanString[i] === 'X' && romanString[i + 1] === 'C') {
			number += 90;
			i++
		} else if (romanString[i] === 'C' && romanString[i + 1] === 'D') {
			number += 400;
			i++
		} else if (romanString[i] === 'C' && romanString[i + 1] === 'M') {
			number += 900;
			i++
		} else {
			number += romanHash[romanString[i]];
		};
	};

	return number;
};


console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('IV'));