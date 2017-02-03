
// alternate way
// $('form').submit(function(event) {
//   var num1 = ($('#number-choice').val())
//   console.log(num1);
// })



$("input[type='submit']").click(function(event){

var numberCollected =  $("input.[name='number-choice']").val();
console.log(numberCollected);

});
