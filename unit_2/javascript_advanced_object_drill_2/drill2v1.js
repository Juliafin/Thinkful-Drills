  function mergeDataStreams(stream1, stream2) {
    var merged = stream1.slice(); 
      // copy stream1 to merged
    stream1.forEach(function(element, index, array){
      var str1 = array[element];
      var mer = merged[element];
      str1.id = mer.id;
      str1.firstName = mer.firstName;
      str1.lastName = mer.lastName;
      str1.age = mer.age;
    });
    console.log(merged);
   }

   mergeDataStreams(testSource1);

   var testSource1 = [
       {
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
];

  // 1.Create an empty array
    var merged = {}

  // 2.Copy dataSource1 into the merged array
    dataSource1.forEach()

//    3.Copy dataSource2 into merged array, checking the id's of each index against the merged data from the original array
//   Create an empty array
//   Copy dataSource1 into the merged array
//   Copy dataSource2 into the merged array, checking the id's of each index against the merged data from the original array
//   check each item in dataSource2 array
//   find the matching item in merged array
//   merge the data
//   loop through the keys of the item (from dataSource2 array loop)
//   copy the key/value to the matched item (we found in merged array)
//   Add Comment Co
// }
// // data
var dataSource1 = [
    {
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

var dataSource2 = [
    {
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
