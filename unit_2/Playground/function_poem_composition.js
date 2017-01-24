function lines1and2(numstring){
  var line1and2 = (`${numstring} green bottles hanging on the wall `)
  console.log(line1and2);
  console.log(line1and2);
}
lines1and2(10);

function line3(){
  var line3 = "And if one green bottle should accidentally fall,";
  console.log(line3);
}

function line4(numstring) {
  var line4 = (`There'll be ${numstring - 1} green bottles hanging on the wall.`);
  console.log(line4);
}

function verse(numstring) {
  lines1and2(numstring);
  line3();
  line4(numstring);
}

function song(numstring) {
	if (numstring > 1) {
		verse(numstring);
    console.log(" \" ")
		song(numstring - 1);
	}
}

song(20);

  console.log(`$green bottles hanging on the wall `) * 2;


// Ten green bottles hanging on the wall
// Ten green bottles hanging on the wall
// And if one green bottle should accidentally fall,
// There'll be nine green bottles hanging on the wall.

// This pattern continues until the number of bottles reaches zero:[2]

// ....
// One green bottle hanging on the wall,
// One green bottle hanging on the wall,
// And if that green bottle should accidentally fall,
// There'll be no more bottles hanging on the wall.
