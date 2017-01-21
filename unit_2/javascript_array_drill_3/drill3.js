function accessFirstItem(array) {
  var firstItem = array[0];
  console.log("The first itme is: " + firstItem);
  return firstItem;
}

function accessThirdItem(array) {
  var thirdItem = array[2];
  console.log("The third item in the array is: " + thirdItem);
  return thirdItem;
}



accessThirdItem([1,2,3,4,5,6]);


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
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}


function runTests() {

  var list = [1, 4, 9, 16, 25]
  var item1 = 1
  var item2 = 9

  var testResults = [
    testFunctionWorks(accessFirstItem, list, item1),
    testFunctionWorks(accessThirdItem, list, item2),
  ];



  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();
