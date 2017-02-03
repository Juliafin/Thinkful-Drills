var data = require('./data.js');

/*Create an empty array
Copy dataSource1 into the merged array
check each item in dataSource2 array
find the matching item in merged array
merge the data
loop through the keys of the item (from dataSource2 array loop)
copy the key/value to the matched item (we found in merged array)*/


// function that matches object id's and if they match, merge the object into a third object
function objectMerge(obj1, obj2) {

    var obj3 = {};
    obj1keys = Object.keys(obj1); // creates an array out of the keys from obj1 that need to be copied
    obj2keys = Object.keys(obj2); // creates an array out of the keys from obj2 that need to be copied

    // copy keys of object 1 to object 3 by iterating through the obj1 keys
    obj1keys.forEach(function(key) {
      obj3[key] = obj1[key];
    });

    // copy keys of object 2 to object 3 by iterating through the obj2 keys
    obj2keys.forEach(function(key) {
      obj3[key] = obj2[key];
    });

    // returns the third object
    // console.log(obj3);
    return obj3;

}
// compares an incoming element (in an array of objects), comparing it to the other stream, returning the matching ids, otherwise returns -1 (meaning a match was not found)


function mergeDataStreams(stream1, stream2) {

// copy stream 1 into the merged array
  var mergedObj, merged = [], count = 0;
  // stream1.slice();

  var findIndex = function(obj, objAry) {
    var out = -1;
    for(var i=0; i<objAry.length; i++) {
      count += 1;
      if(obj.id === objAry[i].id) out = i;
    }
    return out;
  }

  // nested for loops to compare every combination of elements
  stream1.forEach(function(item) {
    count += 1;
    var index = findIndex(item, stream2); //checks whether the current element (of stream1) iterated matches against elements in stream 2 and assigns to index

    if(index === -1) { // not found
      merged.push(item); //the current element from stream1 is pushed to merged
    } else { // found
      mergedObj = objectMerge(item, stream2[index]); //intermediate object to grab merging both elements
      merged.push(mergedObj); //push the merged elements 1 and 2 into merged (via mergedObj)
    }
  });

  stream2.forEach(function(item2) {
    count += 1;
    var index = findIndex(item2, stream1); //checks whether the current element (of stream2) iterated matches against elements in stream 1 and assigns to index
    if(index === -1) { // not found
      merged.push(item2);
    }
  });

  return { data: merged, count: count };
}

var mergeDataStreams2 = function(stream1, stream2) {
  var out, count = 0;

  var convertToObj = function(aryObj) {
    var out = {};
    aryObj.forEach(function(item) {
      count += 1;
      out[item.id] = item;
    });
    return out;
  };

  var convertToAry = function(obj) {
    var out = [];
    Object.keys(obj).forEach(function(item) {
      count += 1;
      out.push(obj[item]);
    });
    return out;
  }

  var obj1 = convertToObj(stream1);
  var obj2 = convertToObj(stream2);

  //console.log(obj1, obj2);

  Object.keys(obj2).forEach(function(item) {
    count += 1;
    if(obj1.hasOwnProperty(item)) {
      obj1[item] = objectMerge(obj1[item], obj2[item]);
    } else {
      obj1[item] = obj2[item];
    }
  });

  out = convertToAry(obj1);

  return { data: out, count: count };
};

// O(n^3) - Time complexity of this algorithm
// Merging two arrays of objects
// when they don't match just add
// Approach #1:
//    for each item in the first array
//      determine if the object exists in the 2nd array
//      if so, we merge
//      if not, we add
//    add all items from 2nd array that weren't merged
var size = 5000;
var result = mergeDataStreams(data.dataFactory(size), data.dataFactory(size));
console.log("Loops One:", result.count, "Data Len:", result.data.length);
var result2 = mergeDataStreams2(data.dataFactory(size), data.dataFactory(size));
console.log("Loops Two:", result2.count, "Data Len:", result2.data.length);
