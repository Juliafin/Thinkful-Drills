function recipeFactory(name, ingredients, steps) {
  return {
    name: name,
    steps: steps,
    ingredients: ingredients,
    ingredientsHtml: function() {
      var ingredientList = this.ingredients.join(', ');
      return ingredientList;
    },
    stepsHtml: function() {

      var liOpen = "<li>";
      var liClose = "</li>";
      var olClose = "</ol>";
      var orList = "<ol>";

      for (var i = 0; i < this.steps.length; i++) {
          orList = orList + liOpen + this.steps[i] + liClose;
        } // end of for loop
      orList = orList + olClose;

       console.log(orList);
       return orList;
     } // end of stepsHTML
   }; // end of return
 } // end of recipeFactory


// tests

function testRecipeFactory() {
  var grilledCheese = recipeFactory(
    'grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
  );
  if (grilledCheese) {
    // `$` is a shortcut to the jQuery library, which
    // you'll learn about in the next unit.
    // Here, we're using jQuery to update elements in the HTML
    $('.js-recipe-name').text(grilledCheese.name);
    $('.js-ingredients').html(grilledCheese.ingredientsHtml());
    $('.js-steps').html(grilledCheese.stepsHtml());
  }
}

testRecipeFactory()
