function eq(val1, val2) {
  return val1 === val2; // false or true
}

function max(val, max_characters) {
  return val.length <= max_characters;
}

function test(val1, val2, fn) {
  var test_result = fn(val1, val2);
  var message = (test_result === true) ? "passed." : "failed."; // ternary operator
  console.log('Your test', message);
}

function wisePerson(wiseType, whatToSay) {
  var full_message = 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
  console.log(full_message);
  return full_message;
}

var got = wisePerson('goat', 'Gibbida abbida abbida');
var expected = 'A wise goat once said: "Gibbida abbida abbida".'
test(got, expected, eq);
test(got, 20, max);

// tests

function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  }
}

testWisePerson();
