///////////////1
function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`);
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);

/////////////////2
function calculateDogAge(puppyAge) {
  let dogAge = puppyAge * 7;
  console.log(`Your doggie is ${dogAge} years old in dog years!`);
}
calculateDogAge(1);

///////////////////3
function calculateSupply(age, amountPerDay) {
  let maxAge = 100;
  let totalAmount = (maxAge - age) * 365 * amountPerDay;
  console.log(`You will need ${totalAmount} cups of tea to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(30, 3);

//////////////////4
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Adam"));

//////////////////5
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

//////////////////6
function cube(num) {
  return num ** 3;
}
console.log(cube(4));

/////////////////7
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));
console.log(multiply(5, 4));

//////////////////8
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can";
  } else {
    return `please come back after ${20 - age} years to get one`;
  }
}

console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));

////////////////////////9
function sameLength(str1, str2) {
  return str1.length === str2.length;
}
console.log(sameLength("tree", "clue"));
console.log(sameLength("tree", "car"));

/////////////////////10
function largerNumber(a, b) {
  return a > b ? a : b;
}
console.log(largerNumber(5, 6));
console.log(largerNumber(5, 3));

///////////////////////11
function smallerNumber(a, b, c) {
  return Math.min(a, b, c);
}
console.log(smallerNumber(8, 6, 7));
console.log(smallerNumber(5, 99, 34));
console.log(smallerNumber(5, 99, 3));
console.log(smallerNumber(5, 3, 3));

////////////////////12
function shorterString(str1, str2, str3, str4, str5) {
  let strings = [str1, str2, str3, str4, str5];
  return strings.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
}
console.log(shorterString("air", "school", "car", "by", "github"));

///////////////////////13
function longerString(str1, str2, str3, str4) {
  let strings = [str1, str2, str3, str4];
  return strings.reduce((longest, current) => current.length > longest.length ? current : longest);
}

console.log(longerString("air", "school", "car", "github"));

///////////////////////14
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(1));
console.log(isEven(2));

/////////////////////////15
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(4));
console.log(isOdd(5));

/////////////////////16
function positive(num) {
  return Math.abs(num);
}
console.log(positive(4));
console.log(positive(-5));

/////////////////////17
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Adam", "McCallen"));


////////////////////////18
function average(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

console.log(average(1, 2, 3, 4, 5));
console.log(average(5, 7, 9, 3, 5));

////////////////////////19
function randomNumber() {
  return Math.random();
}

console.log(randomNumber());

///////////////////////20
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomBetweenNumbers(1, 8));

///////////////////////21
function scoreInUniversity(score) {
  if (score >= 95) return "A";
  if (score >= 85) return "B";
  if (score >= 70) return "C";
  if (score >= 50) return "D";
  return "F";
}
console.log(scoreInUniversity(96));
console.log(scoreInUniversity(3));

//////////////////////22
let count = 0;
function counter() {
  count++;
  return count;
}

console.log(counter());
console.log(counter());

/////////////////////////23
let count2 = 0;
function counter() {
  count2++;
  return count2;
}
function resetCounter() {
  let lastCount = count2;
  count2 = 0;
  return `${lastCount} and the counter reset now`;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(resetCounter());











