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
      obj3[key] = obj1[key]
    })

    // copy keys of object 2 to object 3 by iterating through the obj2 keys
    obj2keys.forEach(function(key) {
      obj3[key] = obj2[key]
    })

    // returns the third object
    console.log(obj3);
    return obj3

}

function mergeDataStreams(stream1, stream2) {

// copy stream 1 into the merged array
  var merged = []
  // stream1.slice();

  console.log(merged);

  // variables to send the output of the stream iterations
  var stream1Ele = {};
  var stream2Ele = {};

  // nested for loops to compare every combination of elements
  stream1.forEach(function(element1) {
    stream1Ele = element1;
      stream2.forEach(function(element2) {
        stream2Ele = element2;
        if (stream1Ele.id === stream2Ele.id) {
         merged.push(objectMerge(stream1Ele, stream2Ele));
      }
    })
  })
  console.log(merged);
  return merged
}


// data
var dataSource1 = [{
    id: '0',
    firstName: 'Juan',
    lastName: 'Doe',
    age: 32
  },
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    age: 31
  },
  {
    id: '2',
    firstName: 'Janice',
    lastName: 'Doe',
    age: 30
  },
  {
    id: '3',
    firstName: 'Jake',
    lastName: 'Doe',
    age: 29
  },
];

var dataSource2 = [{
    id: '0',
    occupation: 'architect',
    address: {
      street: '123 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
  {
    id: '1',
    occupation: 'architect',
    address: {
      street: '234 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
  {
    id: '2',
    occupation: 'architect',
    address: {
      street: '345 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
  {
    id: '3',
    occupation: 'architect',
    address: {
      street: '456 Main St',
      city: 'CityTown',
      country: 'USA'
    }
  },
];


//function call

mergeDataStreams(dataSource1, dataSource2);


/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
  });

  var actual = mergeDataStreams(stream1, stream2);

  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );

  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }

  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);
