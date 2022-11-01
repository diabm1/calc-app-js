// console.log("hello")
//now make all of these buttons work

const zero = document.querySelector("#zero");
// console.log(zero)
const one = document.querySelector("#one");
// console.log(one)
const two = document.querySelector("#two");
// console.log(two)
const three = document.querySelector("#three");
// console.log(three)
const four = document.querySelector("#four");
// console.log(four)
const five = document.querySelector("#five");
// console.log(five)
const six = document.querySelector("#six");
// console.log(six)
const seven = document.querySelector("#seven");
// console.log(seven)
const eight = document.querySelector("#eight");
// console.log(eight)
const nine = document.querySelector("#nine");
// console.log(nine)
let buttonClicked = false;

zero.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("zero clicked!");
    console.log(zero.value);
  }
});

one.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("one clicked!");
    console.log(one.value);
  }
});

two.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("two clicked!");
    console.log(two.value);
  }
});

three.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("three clicked!");
    console.log(three.value);
  }
});

four.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("four clicked!");
    console.log(four.value);
  }
});

five.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("five clicked!");
    console.log(five.value);
  }
});

six.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("six clicked!");
    console.log(six.value);
  }
});

seven.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("seven clicked!");
    console.log(seven.value);
  }
});

eight.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("eight clicked!");
    console.log(eight.value);
  }
});

nine.addEventListener("click", function (e) {
  // console.log(this.getAttribute('zero'))
  e.preventDefault();
  buttonClicked = true;
  if (buttonClicked) {
    // console.log("nine clicked!")
    console.log(nine.value);
  }
});

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
