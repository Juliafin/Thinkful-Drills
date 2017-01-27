function findLength(array) {
  console.log("This array is " + array.length + " elements long");
  return array.length
}

function accessLastItem(array) {
  console.log("The last value of the array is" + array[array.length -1]);
  return array[array.length -1];
}




/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testFunctionWorks(fn, input, expected) {

  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.error(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

function runTests() {

  var list = [1, 4, 9, 16, 25];
  var originalList = [1, 4, 9, 16, 25];
  var length = 5;
  var lastItem = 25;

  var testResults = [
    testFunctionWorks(findLength, list, length),
    testFunctionWorks(accessLastItem, list, lastItem),
  ];



  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();
