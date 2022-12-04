// console.log("hello")
//now make all of these buttons work

let zero = document.querySelector("#zero");
// console.log(zero)
let one = document.querySelector("#one");
// console.log(one)
let two = document.querySelector("#two");
// console.log(two)
let three = document.querySelector("#three");
// console.log(three)
let four = document.querySelector("#four");
// console.log(four)
let five = document.querySelector("#five");
// console.log(five)
let six = document.querySelector("#six");
// console.log(six)
let seven = document.querySelector("#seven");
// console.log(seven)
let eight = document.querySelector("#eight");
// console.log(eight)
let nine = document.querySelector("#nine");
// nine = Number(nine.value)
// console.log(nine)
let buttonClicked = false;

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const plus = document.querySelector("#plus");

let screen = document.querySelector("#screen");
// screen.innerHTML = Number(four.value) * Number(two.value);

//what represents num1?
//what represents num2?
//it would be the number pressed

const mPlus = document.querySelector("#mPlus");
const mMinus = document.querySelector("#mMinus");
const mRecall = document.querySelector("#mRecall");
const mClear = document.querySelector("#mClear");
// ÷

const clearEntry = document.querySelector("#clearEntry");

clearEntry.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    screen.innerHTML = "";
  }
});

//memory buttons
mPlus.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    // console.log(typeof mPlus.value);
    // if nine pressed and then I press the m+ button then...
    // how do I change the value to a number pressed
    // let's press a button
    // number button pressed then M+ add it to memory
    // localStorage.setItem("M+", nine.value);
    // screen = localStorage.getItem("keyName")
    // console.log(localStorage.getItem("M+"));
  }
});

mMinus.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(typeof mMinus.value);
  }
});

mRecall.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(typeof mRecall.value);
  }
});

mClear.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(typeof mClear.value);
  }
});

//operations buttons
divide.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(typeof divide.value);
  }
});

multiply.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(typeof multiply.value);
  }
});

// how do I do I call this function
minus.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    // console.log(typeof minus.value);
    // return e - b;
  }
});

//.innerHtml = i / j
//.innerHtml = i * j
//.innerHtml = i - j
//.innerHtml = i + j
//.innerHtml = i.j

decimal.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(typeof decimal.value);
  }
});

// function addition(a, b) {
//   //numbers + zero
//   // console.log(typeof one.value);
//   // console.log(typeof two.value);
//   // let b = 1
//   return a + b
// }

equals.addEventListener("click", function (e) {
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    // console.log(typeof equals.value);
    // console.log(addition());
    // return answer
    // if plus is clicked return addition function
    // if equal button clicked display result on screen
    // const operator = `=`;
    // screen.innerHTML = 
    // return operator;
  }
});

// Test Case
// Description: Add two numbers together
// Step 1) press a number
// EXPECTATION: number shows on screen
// ACTUAL: number shows on screen

// Step 2) press plus button
// EXPECTATION: actual + is recoginezed
// number gets stored on left side of operand
// ACTUAL: 

// Step 3) press another number
// EXPECTATION: number gets stored on right side of operand
// ACTUAL: 

// Step 4) press equal sign
// EXPECTATION: result shows on screen
// ACTUAL: 

plus.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e)
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    // console.log(typeof plus.value);
    // if buttonClicked take first number and then add it to second number
    // return addition();
    // if buttoneClicked add first number to second number
    // or add whatever number clicked to another number until equal button is clicked

    // if button clicked then addition button clicked
    // const operator = `+`;
    // console.log(operator)
    // return operator;
    // console.log(addition(e))
  }
});

//numbers buttons
nine.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  // nine = parseInt(nine.value);
  // Try using Number() instead of parseInt()
  if (buttonClicked) {
    screen.innerHTML = Number(nine.value);
    // console.log(typeof Number(nine));
  }
});

eight.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("eight clicked!");
    screen.innerHTML = Number(eight.value);
    // console.log(typeof Number(eight));
  }
});

seven.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("seven clicked!");
    screen.innerHTML = Number(seven.value);
    // console.log(typeof Number(seven));
  }
});

six.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("six clicked!");
    screen.innerHTML = Number(six.value);
    // console.log(typeof Number(six));
  }
});

five.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("five clicked!");
    screen.innerHTML = Number(five.value);
    // console.log(typeof Number(five));
  }
});

four.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("four clicked!");
    screen.innerHTML = Number(four.value);
    // console.log(typeof Number(four));
  }
});

three.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("three clicked!");
    screen.innerHTML = Number(three.value);
    // console.log(typeof Number(three));
  }
});

two.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("two clicked!");
    screen.innerHTML = Number(two.value);
    // console.log(typeof Number(two));
  }
});

one.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("one clicked!");
    screen.innerHTML = Number(one.value);
    // console.log(typeof Number(one));
  }
});

zero.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    screen.innerHTML = Number(zero.value);
    // console.log(typeof Number(zero));
  }
});

//Make the rest of the buttons clickable

//MC = Memory Clear sets the memory to 0.

//MR = Memory Recall uses the number in memory, acts as if you had keyed in that number yourself.

//localStorage
//MS = Memory Store puts the number on the display into the memory.
//M+ = Memory Add takes the number on the display, adds it to the memory, and puts the result into memory.

// The buttons can be handy for doing repeated calculations with a single number. For instance, if you wanted to multiply a bunch of numbers by pi, you could key in the following:

// 3.14159.. MS (stores the number)
// 4 x MR = (gives you 4 times pi)
// 25 x 25 x MR = (gives you 25x25 times pi)

// The M+ button can be handy for figuring out complicated expressions if you don't happen to have a scientific calculator. For example, to calculate (5 x 6) + (12 x 2) + (3 x 7), you can do the following:

// 5 x 6 = (calculator says 30)
// MS (stores 30 in memory)
// 12 x 2 = (calculator says 24)
// M+ (takes 24, adds it to 30, stores result 54 in memory)
// 3 x 7 = (21)
// M+ (takes 54, adds 21, stores the result 75)
// MR (displays the result 75)

// I think it will help you.

//I feel like trying to add a couple of numbers just to get a feel for what the logic might look like
//now to have it show on screen
