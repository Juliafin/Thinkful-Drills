function numberCounter(number) {
    // outputs an array of numbers //
    var arrayOfNum = [];
    for (i=1; i <= number; i++) {
       arrayOfNum.push(i);
    }
    console.log(arrayOfNum);
    return arrayOfNum
}

 // tests for multiples of 3
function multiplesOf3Fizz(array) {
  for (i=0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      array[i] = "fizz"
    }
    else {
    }
  }
  return array
}

  // tests for multiples of 5
function multiplesOf5buzz(array) {
  for (i=0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
      array[i] = "buzz"
    }
    else {
    }
  }
  return array
}

  // tests for multiples of 15
function multiplesOf15Fizzbuzz(array) {
  for (i=0; i < array.length; i++) {
    if (array[i] % 15 === 0) {
      array[i] = "fizzbuzz"
    }
    else {
    }
  }
  return array
}

function getNumberProduceResult(number) {

var testArray = numberCounter(number);
var result1 = multiplesOf3Fizz(testArray);
var result2 = multiplesOf5buzz(result1);
var result3 = multiplesOf15Fizzbuzz(result2);
console.log(result3);
return result3
}

getNumberProduceResult(20);
