// Function defined here

function shouter (whatToShout) {
  var upperCaseString = whatToShout.toUpperCase() + "!!!";
  // -> '"FEE FIGH FOE FUM!!!"'
  // -> 'FEE FIGH FOE FUM!!!'
  console.log(upperCaseString);
  return upperCaseString; // ends the function
}

shouter('fee figh foe fum');



// Function tested here

function testShouter() {
  var whatToShout = 'fee figh foe fum';
  var expected = 'FEE FIGH FOE FUM!!!'; //'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  }
  else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();
