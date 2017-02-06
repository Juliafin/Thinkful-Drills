function a () {
 var myVar = 2
  console.log(myVar);
  function b() {
    console.log(myVar);
  }
}

a(b());
// doesn't work
