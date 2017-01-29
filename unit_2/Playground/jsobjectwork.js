var map = {

  art: "michaelangelo",
  music: "mozart",
  number: 2,
}


map.art == "michaelangelo"


var array = [
// index 0
  {

    number: "2",
    art: "michaelangelo",         //element
    music: "mozart",              // element
                                  // element
  },

  // index 1
  {
    number: "3",
    art: "Da Vinci",
    music: "Beethoven",
  }
]


array[0].art == "michaelangelo"

array['0'] == undefined, '0' is not a number


var id2object = {
  /*key*/"2": /*value*/     {
    number: "2",
    art: "michaelangelo",         //element
    music: "mozart",              // element
                                  // element
  },

  "3":{
    number: "3",
    art: "Da Vinci",
    music: "Beethoven",
  }
}

var id2object = {};

array.forEach(function(element, index, arr){
  id2object[element.number] = element;

});

array2.forEach(function(e2, index, ar){
  var twin = id2object[e2.number]
  /// twin ==  id2object["2"] ==     number: "2",
      // art: "michaelangelo",         //element
      // music: "mozart",              // element


});















var obj1 = {
    number: "3",
    art: "Da Vinci",
    music: "Beethoven",
  }
var obj2 =
  {
    number: "3",
    dance: "bolshoi ballet",
    drama: "12 angry men",
  }


// function that matches object id's and if they match, merge the object into a third object
function objectMerge(obj1, obj2)

if (obj1.id == obj2.id){
  var obj3 = {};
  obj1keys = Object.keys(obj1);  // creates an array out of the keys from obj1 that need to be copied
  obj2keys = Object.keys(obj2);  // creates an array out of the keys from obj2 that need to be copied

  // copy keys of object 1 to object 3 by iterating through the obj1 keys
  obj1keys.forEach(function(key){
  obj3[key] = obj1[key]
  })

  // copy keys of object 2 to object 3 by iterating through the obj2 keys
  obj2keys.forEach(function(key){
  obj3[key] = obj2[key]
  })

  // returns the third object
  console.log(obj3);
  return obj3
}
