//////////////1
let num1 = 7;
let num2 = 11;
if (num1 > 10 && num2 > 10){
  console.log("Both numbers are greater than 10");
}
else{
  console.log ("At least one number is not greater than 10");
}

/////////////2
let username = "hamzeh";
let password = 12345;
if (username === "hamzeh" && password ===12345){
  console.log("Access granted");
}
else{
  console.log("Access denied");
}

////////////3
let num = 15 ; 
if (num >=10 && num <=20){
  console.log("The number is between 10 and 20");
}
else{
  console.log("The number is not between 10 and 20");
}

///////////4
let age =20;
let li = true
if (age >=18 && li ===true){
 console.log("you can drive");
}
else{
  console.log("you cannot drive");
}

///////////5
let num3 = 11;
if (num3 > 10 || num3<0){
  console.log("Invalid number");
}
else{
  console.log ("valid number");
}

//////////6
let number = 7;
if ((number>=5 && number<=10) || (number>=20 && number<=25)){
console.log("The number is valid");
}
else{
  console.log("The number is not valid");
}

/////////7
let pass ="secret";
if (pass === "secret" || pass==="password"){
  console.log("Access granted");
}
else{
  console.log("Access denied");
}


/////////8
let n = 20 ;
if ((n >= 0 && n<=100) && (n%2 ===0)){
console.log ("The number is even and between 0 and 100")
}
else {
  console.log ("The number is not even and/or not between 0 and 100");
}

/////////9
let n1 = -5 ; 
let n2 = 7;
if (n1 < 0 || n2 <0 ){
  console.log("At least one number is  negative");
}
else {
  console.log( "Both numbers are positive");
}

/////////10
let age1=17;
let student = true;
if (age < 18 || student===true){
  console.log("You qualify for a discount");
}
else{
  console.log("You do not qualify for a discount");
}