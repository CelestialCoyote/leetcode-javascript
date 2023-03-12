/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const M = ["", "M", "MM", "MMM"];
	const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

	const thousands = Math.floor((num % 10000) / 1000);
	const hundreds = Math.floor((num % 1000) / 100);
	const tens = Math.floor((num % 100) / 10);
	const ones = Math.floor(num % 10);

	return M[thousands] + C[hundreds] + X[tens] + I[ones];
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));