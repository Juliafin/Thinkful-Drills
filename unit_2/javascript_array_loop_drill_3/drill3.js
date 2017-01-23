// function takes a number that determines the number of elements in the array.
// Numbers that are divisible by 3 and 5 produce "fizzbuzz". Numbers divisible
// by 3 produce "fizz". Numbers divisible by 5 produce "fizzbuzz".
function fizzBuzz(countTo) {
  // variables declared
  var currentNumber = 1;
  var arrayOfFizz = [];
  // counTo determines how many times the loop runs

  for(i=0; i < countTo; i++, currentNumber++) {
    // division by 3 and 5 checked first, preventing conflict with division by 3 or by 5 activating first


    if  (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(`The current number, ${currentNumber} is divisible by both 3 and 5. "fizzbuzz" will be added to the array"`);
      arrayOfFizz.push("fizzbuzz");
    }

    // division by 3 checked here

    else if (currentNumber % 3 === 0) {
      console.log(`The current number, ${currentNumber} is divisible by 3. "fizz" will be added to the array"`);
      arrayOfFizz.push("fizz");
    }

    // division by 5 checked here (order of division checking by 3 and 5 does not matter)

    else if (currentNumber % 5 === 0) {
      console.log(`The current number, ${currentNumber} is divisible by 5. "buzz" will be added to the array"`);
      arrayOfFizz.push("buzz");
    }

    // numbers not divisible by the above conditions get printed
    else {
      console.log(currentNumber);
      arrayOfFizz.push(currentNumber);
      }

  } // for loop close

  console.log(`The array contains ${arrayOfFizz.length} elements`)
  console.log(arrayOfFizz);
  return arrayOfFizz


} // function close


// function test call (30 numbers)
fizzBuzz(30);




/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {

      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();
