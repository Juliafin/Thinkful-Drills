
function minusLastItem(array) {

  var arrayLengthMinusLast = array.length - 1;
  var arrayWithoutLast = array.slice(0, arrayLengthMinusLast);
  console.log(arrayWithoutLast);
  return (arrayWithoutLast)
}


function copyFirstHalf(array) {

  if (array.length % 2 === 0) {
    var evenArray = [];
    var arrayHalfLengthEven = array.length / 2;
    console.log(`The array length of ${arrayHalfLengthEven} is even.`);
    evenArray = array.slice(0, arrayHalfLengthEven);
    return evenArray;
  }

  else {
    var oddArray = [];
    var arrayHalfLengthOdd = ((array.length / 2) -.5);
    console.log(`The array length of ${arrayHalfLengthOdd} is odd.`);
    oddArray = array.slice(0, arrayHalfLengthOdd);
    return oddArray;
  }

}

testArray = [1,2,3,4,5,6,7];
copyFirstHalf(testArray);
testArray2 = [1,2,3,4];
copyFirstHalf(testArray2);





/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testFunctionWorks(fn, input, expected) {
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function runTests() {

  var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
  var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result2 = ["red bull", "monster", "amp"];

  var testResults = [
    testFunctionWorks(minusLastItem, list, result1),
    testFunctionWorks(copyFirstHalf, list, result2),
  ];


  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();
