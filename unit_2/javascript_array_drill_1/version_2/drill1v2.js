// function makeList(item1, item2, item3) {
// var list = [];
// return list.forEach(arguments.length);
// }


// Memory = address, value
// pass by value
// pass by reference
// a = 2 // pass by value
// a = [1, 2, 3] // pass by reference (aka address)
// var a = [1, 2, 3];
// var b = a;
// var c = [4, 5, 6];
// var a = c;

// RIGHT HERE - what does b equal?

// primitives (strings, numbers, characters)
// arrays and objects

function makeList() {
  // mutation
  // side-effects
  var myArray = [];
  for (var i=0; i<arguments.length; i++) {
    var item = arguments[i];
    myArray.push(item);
  }
  return myArray;
}

function makeList2() {
  // mutation
  // side-effects
  var myArray = [1, 2, 3];
  myArray = arguments;
  return myArray;
}

var result = makeList2(4, 5, 6);
console.log(result);

function foo(item1){
  //
  console.log(arguments, item1, item2);
}

foo(1,2);

[1,2] 1

function foo(item1){
  //
  console.log(item1);
}

// function can be invoked with any number of parameters
// a function signature can optionally name parameters
// parameters are always stored in the arguments variable

/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testMakeList() {

  var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  var result = makeList(items[0], items[1], items[2]);

  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  }
}

testMakeList();
