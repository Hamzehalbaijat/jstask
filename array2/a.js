var arr1 = [1, 7, 9, 45]; 

var arr2 = ["Str", "alex", "moh"];  

var arr3 = ['the', 'fox', 'over', 'lazy', 'dog'];  

/////////////////2
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf("Banana")); 
console.log(fruits.indexOf("Tomato")); 

////////////////3
var favoriteFood = ["Pizza", "Burger", "Sushi", "Pasta", "Ice Cream"];
var favoriteSport = ["Basketball", "Football", "Tennis"];
var favoriteMovie = ["Inception", "The Matrix", "Titanic", "Interstellar"];

/////////////////4
function firstOfArray(arr) {
  return arr[0];
}

console.log(firstOfArray([1, 4, 5])); 
console.log(firstOfArray(["t", "u", "g", "x"]));  

///////////////////5
function lastOfArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastOfArray([1, 4, 5]));  
console.log(lastOfArray(["t", "u", "g", "x"])); 


/////////////////////6
var array = [0, 5, 7, 9];
array.shift();
array.unshift(1);
array.push(3, 4, 6);
array.push(8, 10);
console.log(array); 

///////////////////////////7
var array2 = [5, 9, -7, 3.5];
console.log(array2.push(10));  
console.log(array2.unshift(3)); 
console.log(array2.shift());
console.log(array2.pop()); 

/////////////////////////8
function middleOfArray(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  
  if (arr.length % 2 === 0) {
    return `${arr[middleIndex - 1]} and ${arr[middleIndex]}`;
  } else {
    return arr[middleIndex];
  }
}

console.log(middleOfArray([1, 4, 5])); 
console.log(middleOfArray(["t", "u", "g", "x"])); 

// 9
var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2;
console.log(animals); // ['zebra', 'elephant']
////10
var nums = [1, 2, 3, 8, 9];
nums = [5, -22, 3.5, 44, 98, 44];
console.log(nums); // [5, -22, 3.5, 44, 98, 44]

//////////11
function indexOfArray(array, index) {
    return array[index];
}
console.log(indexOfArray([1, 2, 3, 8, 9], 3)); // 8
console.log(indexOfArray([1, 2, 3, 8, 9], 1)); // 2

////////// 12
function arrayExceptLast(array) {
    return array.slice(0, -1);
} 
console.log(arrayExceptLast([1, 2, 3, 8, 9])); // [1, 2, 3, 8]

//////////13
function addToEnd(array, value) {
    array.push(value);
    return array;
}
console.log(addToEnd([1, 2, 3, 8, 9], 55)); // [1, 2, 3, 8, 55]

///////////14
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 8, 9])); // 23

// Using while loop
function sumArrayWhile(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
}
console.log(sumArrayWhile([1, 2, 3, 8, 9])); // 23

// 14
function minInArray(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
console.log(minInArray([1, 2, 3, 8, 9])); // 1

// Using while loop
function minInArrayWhile(array) {
    let min = array[0];
    let i = 1;
    while (i < array.length) {
        if (array[i] < min) {
            min = array[i];
        }
        i++;
    }
    return min;
}
console.log(minInArrayWhile([1, 2, 3, 8, 9])); // 1

// 15
function removeFromArray(array, element) {
    return array.filter(item => item !== element);
}
console.log(removeFromArray([1, 2, 3, 8, 9], 8)); // [1, 2, 3, 9]

// 16
function oddArray(array) {
    return array.filter(num => num % 2 !== 0);
}
console.log(oddArray([1, 2, 3, 8, 9])); // [1, 3, 9]

// 17
function aveArray(array) {
    return sumArray(array) / array.length;
}
console.log(aveArray([1, 2, 3, 8, 9])); // 4.6

// 18
function shorterInArray(strings) {
    let shortest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }
    return shortest;
}
console.log(shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])); // "alex"

// 19
function repeatChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala", "a")); // 6

// 20
function evenIndexOddLength(strings) {
    return strings.filter((str, index) => index % 2 === 0 && str.length % 2 !== 0);
}
console.log(evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])); // ["madrasa"]

// 21
function powerElementIndex(array) {
    return array.map((num, index) => Math.pow(num, index));
}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10])); // [1, 5, 16, 27, 16, 100000]

// 22
function evenNumberEvenIndex(nums) {
    return nums.filter((num, index) => num % 2 === 0 && index % 2 === 0);
}
console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1])); // [2, 8, 34]

