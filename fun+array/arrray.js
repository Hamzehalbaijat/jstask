function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([1, 5, 3, 9, 2])); 

/////////2
function findSmallest(arr) {
  return Math.min(...arr);
}

console.log(findSmallest([1, 5, 3, 9, 2]));

///////////3
function findSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(findSum([1, 5, 3, 9, 2])); 

///////////4
function findAverage(arr) {
  const sum = findSum(arr);
  return sum / arr.length;
}

console.log(findAverage([1, 5, 3, 9, 2])); 

/////////////5
function findMedian(arr) {
  arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);
  
  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2;
  } else {
    return arr[middle];
  }
}

console.log(findMedian([1, 5, 3, 9, 2])); 

/////////////6
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 5, 3, 9, 2, 1, 5]));  

/////////////////7
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortAscending([1, 5, 3, 9, 2])); 

//////////////8
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([1, 5, 3, 9, 2]));  

/////////////9
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffleArray([1, 5, 3, 9, 2]));  
