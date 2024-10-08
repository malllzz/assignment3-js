function arrSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentSum + arr[i] > arr[i]) {
      currentSum += arr[i];
    } else {
      currentSum = arr[i];
      tempStart = i;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  const maxSubarray = arr.slice(start, end + 1);
  return [maxSubarray, maxSum];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); //output: [[4, -1, -2, 1, 5], 7]