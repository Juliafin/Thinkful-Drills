
var temparr = [ "a","b"];

              0,1,2,3,4,5

for(var i=0;i<temparr.length;++i){


  if (temparr[i] % 2 == 0) {
  console.log(temparr[i]);
  }
}


for loop
closure
anonymous
var temparr = [ "a","b"];
function printArray(val, indx){

  console.log(val,indx)
}
temparr.forEach( printArray)



var databse = {
  name: "julia",
  age:25,
  city:"NY"
}

var obj = {
  name: "",
  age:0,
  city:""
}

console.log(obj)

for(a in obj){
   obj[a] = databse[a];
}

console.log(obj)

for()

for(i=0;i<databse.length;i++){

  obj[i] = databse[i];

}



while do while
