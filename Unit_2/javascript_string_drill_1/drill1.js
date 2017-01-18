function wisePerson(wiseType, whatToSay) {

  var wiseType;
  var whatToSay;

      return 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
//   console.log('A wise ' + wiseType + ' once said: "' + whatToSay + '".');

}


wisePerson('goat', 'Gibbida abbida abbida');

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
