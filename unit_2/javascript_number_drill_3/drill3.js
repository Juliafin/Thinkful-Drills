function isDivisible(divisee, divisor) {

    var divResult = divisee % divisor;

    if (divResult === 0) {
        console.log(`${divisee} divided by ${divisor} does not leave a remainder. Therfore it is divisible.`);
        return (true);
    }

    else {
        console.log(`${divisee} divided by ${divisor} leaves a remainder. Therfore it is not divisible`);
        return (false);
    }
}

isDivisible(15, 4);
isDivisible(18, 3);
isDivisible(21, 3);

/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  }
  else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();
