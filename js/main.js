//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let ex1Arr = [1, 2, 3, 5, 6, 7]
for(let i in ex1Arr) {
    // console.log(`Current index is ${i}`)
    if (i == 0 || ex1Arr[i]-1 == ex1Arr[i-1]){
        continue
    } else {
        console.log(`Exercise 1: ${i}`)
    }
}



//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/


function sumPositiveNums(nums){
    if (nums.length == 0) {
        return 0
    }
    let result = 0
    for (let x of nums) {
        if (x > 0) {
            result += x
        }
    }
    return result
}

let nums1 = [10, 12, -9, 3, -1, 0, 15] 
let nums2 = [3, 5, 7, 9, -10, 2, -22, -1]
let nums3 = []

console.log(`Exercise 2: ${sumPositiveNums(nums1)}`) // 40
console.log(`Exercise 2: ${sumPositiveNums(nums2)}`) // 26
console.log(`Exercise 2: ${sumPositiveNums(nums3)}`) // 0