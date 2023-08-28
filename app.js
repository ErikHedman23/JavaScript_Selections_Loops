console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let answer = "";

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) {
    answer = "FIZZ";
    console.log(answer);
  }
  if (i % 5 == 0) {
    answer = "BUZZ";
    console.log(answer);
  }
  if (i % 3 == 0 && i % 5 == 0) {
    answer = "FIZZ" + "BUZZ";
    console.log(answer);
  }
}

//exercise 3
console.log("Exercise 3: \n=========================");
let numer = 0;
while (numer <= 100) {
  if (numer % 2 != 0) {
    console.log(numer);
  }
  numer++;
}

let numers = 0;
let answer2 = "";
do {
  numers++;
  if (numers % 3 == 0) {
    answer2 = "FIZZ";
    console.log(answer2);
  }
  if (numers % 5 == 0) {
    answer2 = "BUZZ";
    console.log(answer2);
  }
  if (numers % 3 == 0 && numers % 5 == 0) {
    answer2 = "FIZZ" + "BUZZ";
    console.log(answer2);
  }
} while (numers <= 100);

// exercise 4
console.log("Exercise 4: \n ============================");
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(`The given value is ${value}`);
console.log(`The given n value is ${n}`);
let foundValue = false;
for (let i = 1; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    foundValue = true;
    break;
  }
}
if (!foundValue) {
  console.log("Did not find value.");
}

// exercise 5
console.log("Exercise 5: \n==================");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
let answerr = "";
for (let i = start; i <= end; i++) {
  if (i % fizzDivisor == 0) {
    answerr = "FIZZ";
    console.log(answerr);
  }
  if (i % buzzDivisor == 0) {
    answerr = "BUZZ";
    console.log(answerr);
  }
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    answerr = "FIZZBUZZ";
    console.log(answerr);
  }
}
