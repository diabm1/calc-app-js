// let zero = document.querySelector("#zero");
// let actualZero = Number(zero.value);
// let one = document.querySelector("#one");
// let actualOne = Number(one.value);
// let two = document.querySelector("#two");
// let actualTwo = Number(two.value);
// let three = document.querySelector("#three");
// let actualThree = Number(three.value);
// let four = document.querySelector("#four");
// let actualFour = Number(four.value);
// let five = document.querySelector("#five");
// let actualFive = Number(five.value);
// let six = document.querySelector("#six");
// let actualSix = Number(six.value);
// let seven = document.querySelector("#seven");
// let actualSeven = Number(seven.value);
// let eight = document.querySelector("#eight");
// let actualEight = Number(eight.value);
// let nine = document.querySelector("#nine");
// let actualNine = Number(nine.value);
let buttonClicked = false;

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const plus = document.getElementById("plus");

let screen = document.querySelector("#screen");
// screen.innerHTML = Number(four.value) * Number(two.value);

const mPlus = document.querySelector("#mPlus");
const mMinus = document.querySelector("#mMinus");
const mRecall = document.querySelector("#mRecall");
const mClear = document.querySelector("#mClear");
// ÷

const clearEntry = document.querySelector("#clearEntry");

// let firstOperand = null;
let operand = "";
let operator = null;
// let secondOperand = null;

// clearEntry.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     screen.innerHTML = "";
//   }
// });

//memory buttons
// mPlus.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     // console.log(typeof mPlus.value);
//     // if nine pressed and then I press the m+ button then...
//     // how do I change the value to a number pressed
//     // number button pressed then M+ add it to memory
//     // localStorage.setItem("M+", nine.value);
//     // screen = localStorage.getItem("keyName")
//     // console.log(localStorage.getItem("M+"));
//   }
// });

// mMinus.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     console.log(typeof mMinus.value);
//   }
// });

// mRecall.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     console.log(typeof mRecall.value);
//   }
// });

// mClear.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     console.log(typeof mClear.value);
//   }
// });



//operations buttons
// divide.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     console.log(typeof divide.value);
//   }
// });

// multiply.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     console.log(typeof multiply.value);
//   }
// });

// minus.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     // console.log(typeof minus.value);
//     // return e - b;
//   }
// });

// Test Case
// Description: Add two numbers together
// Step 1) press a number
// EXPECTATION: number shows on screen
// ACTUAL: number shows on screen

// Step 2) press plus button
// EXPECTATION: actual + is recoginezed
// number gets stored on left side of operator
// ACTUAL: nothing happens

// Step 3) press another number
// EXPECTATION: number gets stored on right side of operator
// ACTUAL:

// Step 4) press equal sign
// EXPECTATION: result shows on screen
// ACTUAL: nothing shows on screen

// plus.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log(e)
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     // console.log(typeof plus.value);
//     // if buttonClicked take first number and then add it to second number
//     // return addition();
//     // if buttoneClicked add first number to second number
//     // or add whatever number clicked to another number until equal button is clicked
//     // if button clicked then addition button clicked
//     // const operator = `+`;
//     // console.log(typeof Number(operator))
//     // return operator;
//     // what do I put inside of the addition function
//     // console.log(addition(actualOne))
//     // console.log(addition(actualOne, actualOne))

//     //firstOperand = numberClicked

//     // let arr = []
//     // for (let i = 0; i < 10; i++) {
//     //   // const element = array[i];
//     //   operand = i;
//     //   // console.log(operand)
//     //   if (operand === 0) {
//     //     operator += operand;
//     //   } else if (operand === 1) {
//     //     operator += operand;
//     //   } else if (operand === 2) {
//     //     operator += operand;
//     //   }
//     // }
//     // console.log(operator);
//     // operator = +
//     // operator += operand;
//     // console.log(operator);
//     // console.log(operand)

//     operator = "+";
//   }
// });

//.innerHtml = i / j
//.innerHtml = i * j
//.innerHtml = i - j
//.innerHtml = i + j
//.innerHtml = i.j

// decimal.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     console.log(typeof decimal.value);
//   }
// });

// function addition(a) {
//   let total = 0;
//   // while (a < 10) {
//   //   a += total;

//   //   console.log(total)
//   // }
// }


// equals.addEventListener("click", function (e) {
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     // console.log(typeof equals.value);
//     // console.log(addition());
//     // return answer
//     // if plus is clicked return addition function
//     // if equal button clicked display result on screen
//     // const operator = `=`;
//     // screen.innerHTML =
//     // return operator;
//   }
// });



//numbers buttons
let numbers = document.querySelectorAll(".number");
console.log(numbers);
numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    e.preventDefault();
    operand += e.target.value;
    screen.innerHTML = operand;
  });
});

// nine.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   // nine = parseInt(nine.value);

//   // Try using Number() instead of parseInt()
//   if (buttonClicked) {
//     // console.log(e.target)
//     operand += e.target.value;
//     screen.innerHTML = operand;
//     // Number(nine.value);
//     // console.log(typeof Number(nine));
//     // console.log(actualNine);
//     // operand = 9;
//     // // operand = "";
//     // if(operator === "+"){
//     //   operand += ""
//     //   console.log(operand)
//     // }

//     // is operator selected? yes or no
//     // no? then concatenate number next to number 9

//     // when you click the operator, you can store that value of "+" into the operator variable.
//     // Then when you click another number, like 7, it will look to see if there is an operator.
//     // Since there is, you know you are working with the second operand.
//     // Now you can concatenate the number 7 to whatever is currently the string in operand2.
//   }
// });

// eight.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("eight clicked!");
//     screen.innerHTML = Number(eight.value);
//     // console.log(typeof Number(eight));
//     // console.log(actualEight);
//     operand = 8;
//   }
// });

// seven.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("seven clicked!");
//     screen.innerHTML = Number(seven.value);
//     // console.log(typeof Number(seven));
//     // console.log(actualSeven);
//     operand = 7;
//   }
// });

// six.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("six clicked!");
//     screen.innerHTML = Number(six.value);
//     // console.log(typeof Number(six));
//     // console.log(actualSix);
//     operand = 6;
//   }
// });

// five.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("five clicked!");
//     screen.innerHTML = Number(five.value);
//     // console.log(typeof Number(five));
//     // console.log(actualFive);
//     operand = 5;
//   }
// });

// four.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("four clicked!");
//     screen.innerHTML = Number(four.value);
//     // console.log(typeof Number(four));
//     // console.log(actualFour);
//     operand = 4;
//   }
// });

// three.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("three clicked!");
//     screen.innerHTML = Number(three.value);
//     // console.log(typeof Number(three));
//     // console.log(actualThree);
//     operand = 3;
//   }
// });

// two.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("two clicked!");
//     screen.innerHTML = Number(two.value);
//     // console.log(typeof Number(two));
//     // console.log(actualTwo);
//     operand = 2;
//   }
// });

// one.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("one clicked!");
//     screen.innerHTML = Number(one.value);
//     // console.log(typeof Number(one));
//     // console.log(actualOne);
//     operand = 1;
//     // console.log(firstOperand);
//   }
// });

// zero.addEventListener("click", function (e) {
//   // console.log(this.getAttribute('zero'))
//   e.preventDefault();
//   buttonClicked = true;
//   if (buttonClicked) {
//     // console.log("zero clicked!");
//     screen.innerHTML = Number(zero.value);
//     // console.log(typeof Number(zero));
//     // console.log(actualZero);
//     operand = 0;
//   }
// });

//Notes&Extra Info:

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
