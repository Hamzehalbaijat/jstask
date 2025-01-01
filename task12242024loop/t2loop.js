///////////1
for (let i=1 ; i<=10 ; i++){
  console.log(i);
}
//////////2
for (let even=1 ; even<=10; even++){
  if (even %2===0){
    console.log(even);
  }
}
/////////3
for (let odd=1 ; odd<=10; odd++){
  if (odd %2!=0){
    console.log(odd);
  }
}
/////////4
let tableNumber = prompt("Enter a number for its multiplication table:");
console.log(`Multiplication table of ${tableNumber}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}
/////////5
let sum = 0;
let currentNumber = 1;
while (currentNumber <= 100) {
  sum += currentNumber;
  currentNumber++;
}
console.log("Sum of numbers from 1 to 100:", sum);

///////////6
let factorialNumber = prompt("Enter a number to calculate its factorial:");
let factorial = 1;
for (let i = 1; i <= factorialNumber; i++) {
  factorial *= i;
}
console.log(`Factorial of ${factorialNumber} is ${factorial}`);

////////////7
let fibonacciLimit = 21;
let a = 0, b = 1, next;
console.log("Fibonacci series:");
while (a <= fibonacciLimit) {
  console.log(a);
  next = a + b;
  a = b;
  b = next;
}
///////////8
console.log("Reverse order of numbers: 20, 15, 10, 5");
let reverseNumbers = [20, 15, 10, 5];
let index = reverseNumbers.length - 1;
while (index >= 0) {
  console.log(reverseNumbers[index]);
  index--;
}

