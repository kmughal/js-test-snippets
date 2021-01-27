// Calculate the median of two sorted array //

const nums1 = [3],
  nums2 = [-2,-1];

function problem() {
  const join = nums1.concat(nums2).sort((a,b) => a-b);
  const totalItems = join.length;

  if (totalItems % 2 === 0) {
    let i = totalItems / 2;
    let j = i - 1;
    return ((join[i] + join[j]) / 2);
  } else {
    const index = parseInt(totalItems / 2);
    return join[index];
  }
}

console.log(problem());

