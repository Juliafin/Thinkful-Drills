function celsToFahr(celsTemp) {
  var resultInFahr = celsTemp * (9 / 5) + 32;
  console.log(`${celsTemp} degrees celsius is equal to ${resultInFahr} degrees fahrenheit.`);
  return resultInFahr;

}

function fahrToCels(fahrTemp) {
  var resultInCels = (fahrTemp -32) * (5 / 9);
  console.log(`${fahrTemp} degrees fahrenheit is equal to ${resultInFahr} degrees celsius.`)
  return resultInCels;
}

celsToFahr(0);
fahrToCels(32);



/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  }
  else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  var cel2FahrInput = 100;
  var cel2FahrExpect = 212;
  var fahr2CelInput = 32;
  var fahr2CelExpect = 0;

  if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
     testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
    console.log('SUCCESS: All tests passing');
  }
  else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();
