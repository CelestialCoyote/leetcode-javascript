// 9. Palindrome Number
// Given an integer x, return true if x is a 
// palindrome, and false otherwise.


/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
	if (x < 0) return false;

	let reversedNumber = 0;
	let y = x;

	while (y > 0) {
		const lastDigit = y % 10;

		reversedNumber = (reversedNumber * 10) + lastDigit;
		y = (y / 10) | 0;
	};

	return x === reversedNumber;
};

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(1001));
console.log(isPalindrome(1234));