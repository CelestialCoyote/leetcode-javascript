// Challenge 6315.


// You are given a 0-indexed array of string words and two integers left and right.
// A string is called a vowel string if it starts with a vowel character and ends
// with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive
// range [left, right].


/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
	let vowelList = ['a', 'e', 'i', 'o', 'u'];
	let vowelCount = 0;

	let startsWithVowel = function(toCheck) {
		return vowelList.some(function(vowel) {
			return toCheck.startsWith(vowel);
		});
	};

	let endsWithVowel = function(toCheck) {
		return vowelList.some(function(vowel) {
			return toCheck.endsWith(vowel);
		});
	};

	for (let i = left; i <= right; i++) {
		let toCheck = words[i];

		if (startsWithVowel(toCheck)) {
			if (endsWithVowel(toCheck)) vowelCount++;
		};
	};

	return vowelCount;
};

console.log(vowelStrings(['are', 'amy', 'u'], 0, 2));
console.log(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4));
console.log(vowelStrings(['vo', 'j', 'i', 's', 'i'], 0, 3));



// 6316. Rearrange Array to Maximize Prefix Score

// You are given a 0-indexed integer array nums. You can rearrange the elements of nums to any order (including the given order).

// Let prefix be the array containing the prefix sums of nums after rearranging it. In other words, prefix[i] is the sum of the elements from 0 to i in nums after rearranging it. The score of nums is the number of positive integers in the array prefix.

// Return the maximum score you can achieve.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {

};

// Input: nums = [2,-1,0,1,-3,3,-3]
// Output: 6
// Explanation: We can rearrange the array into nums = [2,3,1,-1,-3,0,-3].
// prefix = [2,5,6,5,2,2,-1], so the score is 6.
// It can be shown that 6 is the maximum score we can obtain.

// Input: nums = [-2,-3,0]
// Output: 0
// Explanation: Any rearrangement of the array will result in a score of 0.



// 6317. Count the Number of Beautiful Subarrays

// You are given a 0-indexed integer array nums. In one operation, you can:

// Choose two different indices i and j such that 0 <= i, j < nums.length.
// Choose a non-negative integer k such that the kth bit (0-indexed) in the binary representation of nums[i] and nums[j] is 1.
// Subtract 2k from nums[i] and nums[j].
// A subarray is beautiful if it is possible to make all of its elements equal to 0 after applying the above operation any number of times.

// Return the number of beautiful subarrays in the array nums.

// A subarray is a contiguous non-empty sequence of elements within an array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {

};


//Input: nums = [4,3,1,2,4]
//Output: 2
//Explanation: There are 2 beautiful subarrays in nums: [4,3,1,2,4] and [4,3,1,2,4].
//- We can make all elements in the subarray [3,1,2] equal to 0 in the following way:
//   - Choose [3, 1, 2] and k = 1. Subtract 21 from both numbers. The subarray becomes [1, 1, 0].
//   - Choose [1, 1, 0] and k = 0. Subtract 20 from both numbers. The subarray becomes [0, 0, 0].
// - We can make all elements in the subarray [4,3,1,2,4] equal to 0 in the following way:
//   - Choose [4, 3, 1, 2, 4] and k = 2. Subtract 22 from both numbers. The subarray becomes [0, 3, 1, 2, 0].
//   - Choose [0, 3, 1, 2, 0] and k = 0. Subtract 20 from both numbers. The subarray becomes [0, 2, 0, 2, 0].
//   - Choose [0, 2, 0, 2, 0] and k = 1. Subtract 21 from both numbers. The subarray becomes [0, 0, 0, 0, 0].
// Example 2:

// Input: nums = [1,10,4]
// Output: 0
// Explanation: There are no beautiful subarrays in nums.



// 6318. Minimum Time to Complete All Tasks

// There is a computer that can run an unlimited number of tasks at the same time. You are given a 2D integer array tasks where tasks[i] = [starti, endi, durationi] indicates that the ith task should run for a total of durationi seconds (not necessarily continuous) within the inclusive time range [starti, endi].

// You may turn on the computer only when it needs to run a task. You can also turn it off if it is idle.

// Return the minimum time during which the computer should be turned on to complete all tasks.


/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function (tasks) {

};


// Example 1:

// Input: tasks = [[2,3,1],[4,5,1],[1,5,2]]
// Output: 2
// Explanation: 
// - The first task can be run in the inclusive time range [2, 2].
// - The second task can be run in the inclusive time range [5, 5].
// - The third task can be run in the two inclusive time ranges [2, 2] and [5, 5].
// The computer will be on for a total of 2 seconds.
// Example 2:

// Input: tasks = [[1,3,2],[2,5,3],[5,6,2]]
// Output: 4
// Explanation: 
// - The first task can be run in the inclusive time range [2, 3].
// - The second task can be run in the inclusive time ranges [2, 3] and [5, 5].
// - The third task can be run in the two inclusive time range [5, 6].
// The computer will be on for a total of 4 seconds.