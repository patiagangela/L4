//In these first 6 questions, replace `null` with the answer.

//Create a string variable. It can contain anything
const newString = 'Angela';

//Create a number variable. It an be any number
const newNum = 1 ;

//Create a boolean variable.
const newBool = true ;

//Solve the following math problem.
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will complete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names.

function returnString(str) {
  //return the string provided: str
  return str;
} 


function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
 const sum = x + y;
 return sum;
}
add (4, 5);


function subtract(x, y) {
  // subtract y from x and return the value
  // code here 
  const subtract = x - y;
  return subtract;
}
subtract (10, 5);

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const multiply = x * y;
  return multiply;
}
multiply (1, 5);



function divide(x, y) {
  // divide x by y and return the value
  // code here
  const divide = x / y;
  return divide;
}
divide (10, 5);

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code h ere
  if (x == y){
    return true;
  }
  return false;
}
areEqual (5, 5);

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length == str2.length){
    return true;
  }
  return false;
}
areSameLength ('cat', 'dog');

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if (90 > num){
    return true;
  }
  return false;
}
lessThanNinety (10);

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (50 < num){
    return true;
  }
  return false;
}
greaterThanFifty (51);

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  const remainder = x % y;
  return remainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 == 0){
    return true
  }
  return false  
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (num % 2  != 0){
    return true
  }
  return false  
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  const square = Math.pow (num, 2);
  return square;
}
square (2); 

function cube(num) {
  // cube num and return the new value
  // code here
  const cube = Math.pow (num, 3);
  return cube;
}
cube (4);

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  const raiseToPower = Math.pow (num, exponent);
  return raiseToPower;
}

raiseToPower (4, 5);

function roundNumber(num) {
  // round num and return it
  // code here
  const roundNumber = Math.round (num);
  return roundNumber;
}
roundNumber (5.55);

function roundUp(num) {
  // round num up and return it
  // code here
  const roundUp = Math.ceil (num);
  return roundUp;
}
roundUp (3.009);

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  const addExclamationPoint = str + '!';
  return addExclamationPoint;
  
}

addExclamationPoint ('hello world');

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here
  const combineNames = firstName + " " + lastName;
  return combineNames;
}
combineNames ('Avion', 'School');

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
const getGreeting = 'Hello' + ' ' + name + '!';
return getGreeting;

}
getGreeting ('Sam');

// The next two questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const getRectangleArea = length * width;
  return getRectangleArea;
}
getRectangleArea (5, 5);

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const getTriangleArea = base * height / 2;
  return getTriangleArea;
}
getTriangleArea (2, 3);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
