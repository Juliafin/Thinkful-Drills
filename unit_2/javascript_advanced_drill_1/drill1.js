// // altnerate solution!
// function max(obj) {
//   var keys = Object.keys(obj);
//   var startKey = keys[0];
//
//   var greaterThanKey = function(maxKey, newKey) {
//     return (obj[newKey] > obj[maxKey]) ? newKey : maxKey;
//   };
//
//   return keys.reduce(greaterThanKey, startKey);
// }

function mostFrequentWord(words) {
  // creating the object for the words in the array to be pushed into
  var objWordCount = {};

  // Parsing through the array "words", and pushing into the object objWordCount, checking whether the object already has that key,
  // then counting up the words)
  // var result = [1, 2, 3].map(function(element) { return element + 1; });
  words.forEach(function(element/*, i, words*/) {

    // if the key exists, add one to it's value
    // alternate if statement #1 : if (objWordCount.hasOwnProperty(element) === false) {
    if (objWordCount.hasOwnProperty(element)) { // true => false, false => true
    // alternative if statement #2 //if (typeof objWordCount[element] === "undefined" ) {

      objWordCount[element] += 1;


    // if it doesn't, make the value equal to 1


    } else {
      //objWordCount[element] = objWordCount[element] + 1;
      objWordCount[element] = 1;
    }
  })

  console.log(objWordCount);

  // wordtest = { and: 3, but: 1, one: 1 }
  var keys = Object.keys(objWordCount); // ["and", "but", "one"]
  var maxKey = keys[0]; // "and"

  keys.forEach(function(key) {
    maxKey = (objWordCount[maxKey] < objWordCount[key]) ? key : maxKey;
  }); // closes foreach

  // Loop 1
  //  wordtest === { and: 3, but: 1, one: 1 }
  //  keys === ["and", "but", "one"]
  //  forEach:
  //    key === "and"
  //    objWordCount[maxKey] === 3
  //    objWordCount[key] === 3
  //    (3 < 3) === false
  //    maxKey === "and";

  // Loop 2
  //  wordtest === { and: 3, but: 1, one: 1 }
  //  keys === ["and", "but", "one"]
  //  forEach:
  //    key === "but"
  //    maxKey === "and"
  //    objWordCount[maxKey] === 3
  //    objWordCount[key] === 1
  //    (3 < 1) === false
  //    maxKey === "and";

  // Loop 3
  //  wordtest === { and: 3, but: 1, one: 1 }
  //  keys === ["and", "but", "one"]
  //  forEach:
  //    key === "one"
  //    maxKey === "and"
  //    objWordCount[maxKey] === 3
  //    objWordCount[key] === 1
  //    (3 < 1) === false
  //    maxKey === "and";

  return maxKey;
} // closes main function

// function test call
  var wordtest = ["and", "and", "but", "and", "one"]
  mostFrequentWord(wordtest);

  // List out my goals:
  // have an object with string keys and number values
  // I want to see which key has the largest value
  // loop through the keys
  // hold max value (need initial value)
  // if the new key has a greater value, make that one the max




//  obj.key = value
//  key


        /* From here down, you are not expected to
        understand.... for now :)


        Nothing to see here!

        */


        function getTokens(rawString) {
          // returns an alphabetically sorted list of words, removing punctuation
          // characters
          return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
        }


        // `getTokens` returns an alphabetically sorted list of words

        (function testMostFrequentWord() {
          var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';

          var expected = 'major';
          var actual = mostFrequentWord(getTokens(spaceOddityText));
          if (expected === actual) {
            console.log('SUCCESS: `mostFrequentWord` is working');
          } else {
            console.log('FAILURE: `mostFrequentWord` is not working');
          }
        })();
