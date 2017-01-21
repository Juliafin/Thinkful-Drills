var $ = {};

// TEST 1 - forEach()
$.forEach = function(ary, fn) {
  for(var i=0; i<ary.length; i++) {
    var item = ary[i];
    fn(item);
  }
}

function printFruit(fruit) {
  console.log('Hey I\'ve found', fruit);
}

function test_1() {
  var fruits = ['apple', 'orange', 'pear', 'grapefruit', 'lemon'];
  $.forEach(fruits, printFruit);
}

/*
 Data Structure:
   Array (key,value pair):
     0, 'hello'
     1, 'world'
     2, 123.43
     Array.length = 3

   Object (key,value pair):
     'name', 'buddy'
     'home', 'atlanta'
     'zip',  '30308'
  Object "$"
      'map', function

*/

// TEST 2 - map()
$.map = function(ary, fn) {
  var out = [];
  for(var i=0; i<ary.length; i++) {
    var item = ary[i];
    var result = fn(item);
    out.push(result);
  }
  return out;
};

function addWater(fruit) {
  return fruit + ' with some water';
}

function test_2() {
  var fruits = ['apple', 'orange', 'pear', 'grapefruit', 'lemon'];
  var fruits_with_water = $.map(fruits, addWater);
  $.forEach(fruits_with_water, printFruit);
}

function square(item) {
  return item * item;
}

function test_3() {
  var nums = [1, 2, 3, 4];
  var squared_nums = nums.concat($.map(nums, square));
  console.log(nums, squared_nums);
}

// Run all our tests
(function() {
  var num_of_tests = 3;

  for(var i=1; i<= num_of_tests; i++) {
    window['test_' + i]();
  }
})();
