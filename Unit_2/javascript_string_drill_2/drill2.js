// Function defined here

function shouter (whatToShout) {
  return whatToShout.toUpperCase() + "!!!";
  console.log( '"'  + whatToShout.toUpperCase() + "!!!"
+ '"');
}
shouter('fee figh foe fum');



// Function tested here

function testShouter() {
  var whatToShout = 'fee figh foe fum';
  var expected = 'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  }
  else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();
