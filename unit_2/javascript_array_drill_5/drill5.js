
function firstFourItems(array) {
  arrayFirstFour = array.slice(0,4);
  console.log(arrayFirstFour);
  return(arrayFirstFour);

}


function lastThreeItems(array) {
  arrayLastThree = array.slice(-3);
  console.log(arrayLastThree);
  return(arrayLastThree);
}




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
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  }
  else {
    console.error('FAILURE: `' + fn.name + '` is not working')
    return false;
  }
}

function runTests() {

  var list = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result1 = ["red bull", "monster", "amp", "rockstar"];
  var result2 = ["amp", "rockstar", "full throttle"];

  var testResults = [
    testFunctionWorks(firstFourItems, list, result1),
    testFunctionWorks(lastThreeItems, list, result2),
  ];


  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();
