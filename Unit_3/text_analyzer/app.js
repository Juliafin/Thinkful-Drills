// Todo:

// V 1. function to pull text on submit button click, and return it to a variable as a string
// 2. function to convert string to an array, to be analyzed
// 3. function to convert array into an object
// 4. function to do word count
//    a. for each loop sending each element into an object, counting each element in variable "wordcount"
// 5. unique word count
//    b. using the for each loop step 2 to send each element into a separate key
// 6. word length
//    c. as forEach function runs, store element.length in a variable for each element
// 7. average sentence length in characters
//    d. for the original array, designate line breaks (and maybe other things) as sentence enders,
//     separate each into a separate array and join all the characters and count .length
// 8. function to inject counter variables for word stats back into the DOM, and remove the .hidden class when done

function textCollector () {

  var allText
  $('form.textform').submit(function(event){
    event.preventDefault();
    allText = $('div > textarea').val();
    // console.log(allText);
    return allText;
  })
}

//return true if submitted text is a number AND has no white space
function isNumber (text) {
  regNum = new RegExp('[0-9]+');
  regNoSpace = new RegExp('^[^\s]+$');
    if ((regNum.test(text)) === true && (regNoSpace.test(text) === true)) {
      return true;
    }
      return false;
}

//removes special characters (but leaves spaces) (not including numbers from string)
function removeSpecial (text) {
  if(text) {
    var lower = text.toLowerCase();
    var upper = text.toUpperCase();
    var result = "";
    for(var i=0; i<lower.length; ++i) {
      if(isNumber(text[i]) || (lower[i] != upper[i]) || (lower[i].trim() === '')) {
        result += text[i];
      }
    }
    cosole.log(result);
    return result;
  }
  return '';
}



// converts the text to an array splitting the index at spaces
function textToArray(text) {
  var textSplit = text.split(" ");
  console.log(textSplit);
  return textSplit;
}

function textAnalyzer() {
  var inputText = textCollector();
  var specialsRemove = removeSpecial(inputText);
  var textArray = textToArray(specialsRemove);
  console.log(textArray);
}

// function call
textAnalyzer();
