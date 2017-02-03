$(function() {
  $(".foo, p, ul, li").click(function(event) {
    event.stopPropagation();
    $("h2").text("event.currentTarget's text is: " + $(event.currentTarget).text());
  });
});


// stuff about jquery:so when you do `$([anything])`, the wonders of the jQuery library treat your argument differently depending on what it is.  if you send a normal string, `$('h1')` then it treats it as an element selector; if you send a string containing an HTML element, then it creates an element `$('<h1>Hello</h1>')`; if you send a *function*, then it basically executes teh function after the DOM is ready...

// `$(handleClicks)` and `$(function() { // doing something! })` are both just sending functions in as an argument.  you can always hold a function in a variable and then send it into another function at a later time.
//
// when you send in `$(handleClicks())`... well that function returns nothing.  so you're really sending in `$(undefined)` which jquery doesn't care about and will ignore.  the function still executed and everything occurred... it just doesn't matter to jq

//
// rgnet1 [12:32 AM]
// `handleClicks()` invokes the function and returns its value (`undefined` in this case)... THEN that gets passed into `$()`
//
// [12:32]
// this isn't jquery magic, it's how javascript evaluates everything... it will always invoke and resolve the function first
//
// [12:33]
// yes. you got it.  and because `handleClicks` isn't invoked, the argument is `typeof handleClicks === 'function'`.  jquery looks at that arguemnt and says, "Oh I have a function.  OK, when DOM is ready, I'm going to invoke the function."
//
// [12:33]
// so either way, the function is getting invoked.
