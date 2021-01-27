/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

const nums = [2, 7, 12, 4],
  target = 9;

function problem() {
  for (let i = 0; i < nums.length; i++) {
    let startValue = nums[i];
    output = [i];

    let checkPoint = 0;

    for (let j = i + 1; j < nums.length; j++) {
      let currentValue = nums[j];
      checkPoint = currentValue + startValue;

      if (checkPoint === target) {
        output.push(j);
        return output;
      }
    }
    output = [];
  }
}

console.log(problem());
