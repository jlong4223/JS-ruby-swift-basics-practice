// this is directory that serves as a warm-up zone to go over basics of javascript

const howManySeconds = (hours) => {
  console.log(hours * 3600);
};
howManySeconds(2);
// =====================================
const giveMeSomething = (a) => {
  console.log("something " + a);
};
giveMeSomething("belongs to jared");

// create function that returns amt of potatos in a string
// TODO transfer this one to ruby
const countPotatoes = (str) => {
  // let str = "";
  console.log((str.match(/potatoes/g) || []).length);
};

countPotatoes("potatoespotatoesobenchickenpotatoes");
// ==================================

// reversing a word
function reverseWord(word) {
  console.log(word.split("").reverse().join(""));
}
reverseWord("word");

// ==================================
// searching for an age
function searchForAge(age) {
  let ages = [1, 2, 5, 657, 45, 23];
  if (ages.includes(age)) {
    console.log(`${age} is in the array`);
  } else {
    console.log(`${age} is not in the array`);
  }
}
searchForAge(3);

// =========================================
// given arguments, name, value (key-value pair), return an obj with the name and value as key-value pairs in the object

function addName(name, value) {
  const entries = new Map([[name, value]]);
  // below will take an array and turn it into an object
  const object = Object.fromEntries(entries);
  console.log("person:", object);
}
addName("jared", 25);

// =======================================
// write a function that multiplies values in an array

function multiplyArray() {
  let sum = 1;
  let array = [1, 2, 3];

  for (let i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  console.log(sum);
}

multiplyArray();

// ========================================
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3 && d < 7) {
    return d * 40 - 20;
  } else if (d < 7 && d < 3) {
    return d * 40;
  }
}

console.log("rental car cost: " + rentalCarCost(2));

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet(name, owner) {
  console.log(name === owner ? "Hello Boss" : "Hello Guest");
}

greet("Jared", "Jeffrey");

// =========================================
// square every digit of a number and concatenate them
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

console.log(squareDigits(3212));

// =====================================
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;

  console.log(
    avg >= 90 && avg <= 100
      ? "A"
      : avg >= 80
      ? "B"
      : avg >= 70
      ? "C"
      : avg >= 60
      ? "D"
      : "F"
  );
}

getGrade(60, 93, 93);

console.log("switch case below as an alternative to ternary");
function getGradeAgain(s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(getGradeAgain(60, 93, 93));
// ======================================
// a function that converts a string to uppercase

function makeUpperCase(str) {
  console.log(str.toUpperCase());
}
makeUpperCase("hello");

// ======================================
// make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
function descendingOrder(n) {
  console.log(+("" + n).split("").sort().reverse().join(""));
}
descendingOrder(123453);

// ===================================
// return the sum of all of the positives numbers in the array
let positiveSum = (arr) => {
  sum = arr.reduce((a, b) => {
    return b > 0 ? b + a : a;
  }, 0);
  console.log(sum);
};
positiveSum([3, -1, 3, -10]);

// ==================================
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise

function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}

console.log(hero(4, 2));

/* - If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

function lovefunc(flower1, flower2) {
  console.log(flower1 % 2 !== flower2 % 2);
}
lovefunc(2, 6);

// ==================================
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// .filter is going through each element in the string and returning all of them if they do not equal a !

let text = "this! is! a! sentence!";

let removeExcla = text
  .split("")
  .filter((letter) => {
    return letter != "!";
  })
  .join("");

console.log(removeExcla);

// ========================================

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// filtering out only the sheep that equal true
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}

console.log(countSheeps([true, false, true, false, true, true]));

// =========================================
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const doubleSonsAge = sonYearsOld * 2;
  console.log("sons age * 2: ", doubleSonsAge);
  let difference =
    doubleSonsAge > dadYearsOld
      ? doubleSonsAge - dadYearsOld
      : dadYearsOld - doubleSonsAge;

  console.log(difference);
}

twiceAsOld(30, 16);

// ===========================================
// splitting the text from the numbers to create seperate arrays
let inputText = "'foofo21' 'bar432' 'foobar12345'";
function processText(inputText) {
  let output = [];
  let json = inputText.split(" ");
  json.forEach(function (item) {
    output.push(item.replace(/\'/g, "").split(/(\d+)/).filter(Boolean));
  });
  return output;
}

console.log(JSON.stringify(processText(inputText)));

// =======================================
// filling in the rest of an array with defined values using the array.fill()

// will not work as there are not values for it to replace
const arrayOne = ["this", "is"];
console.log(arrayOne.fill("an-array", 2, 2));

// works
const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

const array2 = [0, 0, 0, 0];
console.log(array2.fill(1, 2, 4));
// expected output [0, 0, 1, 1]

// =======================================
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
// *** If either input is an empty string, consider it as zero.
function sumStr(a, b) {
  a === "" ? (a = "0") : a;
  b === "" ? (b = "0") : b;
  let newA = a;
  let newB = b;

  let total = parseInt(newA) + parseInt(newB);
  return total.toString();
}

console.log(sumStr("", ""));

// ======================================
// Write a function that given a floor in the american system returns the floor in the european system.

const getRealFloor = (n) => {
  let floor = n <= 12 && n >= 1 ? n - 1 : n <= 0 ? n : n >= 13 ? n - 2 : n;
  return floor;
};

console.log(getRealFloor(15));

// == v2
function getRealFloorTwo(n) {
  switch (true) {
    case n <= 12 && n > 0:
      return n - 1;
    case n >= 13:
      return n - 2;
    default:
      return n;
  }
}

console.log(getRealFloorTwo(-2));

// ==============================================
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// TODO transfer to python

const litres = (hour) => {
  const amount = hour / 2 - 0.5;

  // const amountv2 = hour * 0.5;
  return Math.round(amount);
};

console.log(litres(11.8));

// ==========================================
// Given a list of integers, determine whether the sum of its elements is odd or even.

// TODO transfer to python

const oddEvenTwo = (array) => {
  const getArrayTotal = array.reduce((num1, num2) => num1 + num2, 0);

  return getArrayTotal % 2 === 0 ? "even" : "odd";
};

console.log(oddEvenTwo([2, 2]));

// ==========================================
// TODO transfer to ruby, python, swift
// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0.

const evenLast = (numsArray) => {
  const allEvenIdxs = numsArray.map((num, idx) => {
    return idx % 2 === 0 ? num : 0;
  });

  const sumAllEvenIdxs = allEvenIdxs.reduce((num1, num2) => num1 + num2, 0);

  return sumAllEvenIdxs * numsArray.pop() || 0;
};

console.log("evenLast: ", evenLast([1, 2, 3, 4]));

// == v2
const evenLastTwo = (numsArray) => {
  return (
    numsArray
      .map((num, idx) => {
        return idx % 2 === 0 ? num : 0;
      })
      .reduce((num1, num2) => num1 + num2, 0) * numsArray.pop() || 0
  );
};

console.log("v2: ", evenLastTwo([1, 2, 3, 4]));

// ====================================================
//  given an array of numbers, sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// const sortArray = (array) => {
//   const newOne = array.reverse();
//   const getOdds = array.filter((num) => (num % 2 !== 0 ? num.reverse() : num));

//   return getOdds;
// };

// console.log(sortArray([1, 2]));

// ==========================================
// stolen items array of objects and total value

let findTotal = (value, quanity) => {
  return value * quanity;
};

const stolenItems = [
  {
    name: "warby parker fletcher sunglasses",
    value: 95.0,
    qty: 1,
  },
  {
    name: "iPhone chargers",
    value: 5.0,
    qty: 2,
  },
  {
    name: "aux-cord lightning cable",
    value: 10.0,
    qty: 1,
  },
  {
    name: "emergency car kit",
    value: 45.0,
    qty: 1,
  },
  {
    name: "nike sweatshirt",
    value: 40.0,
    qty: 1,
  },
];

const getTotalOfTotals = (stolenItems) => {
  const getTotals = stolenItems.map((item) => {
    return findTotal(item.value, item.qty);
  });

  console.log("totals: ", getTotals);

  const sumOfTotals = getTotals.reduce((num1, num2) => num1 + num2, 0);
  console.log("sum of stolen Item totals: ", sumOfTotals);
  return sumOfTotals;
};

getTotalOfTotals(stolenItems);
