
/*The shopping list state object: used to:
1. Add items to the inner object storage
2. Manipulate the item storage
3. Map all of the items into elements and append to the DOM
4. Attach listener on the delete buttons that exist and are generated by adding items to the shopping listener
5. ATtach listener on the check  buttons that exist and
*/
var shoppingListState = {

  // Initial populated items
  // Adds items to the array of shopping list items (inner storage)
  items: ["oranges", "bread", "milk"],
  addToShoppingList: function(item) {
    this.items.push(item);
  },

  // Iterates through the shopping list array and adds the elements to the DOM
  shoppingListCreateAndDisplay: function() {
   this.items.forEach(function(item){
      var shoppingListElement = (`
        <li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class= "button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class ="button-label">delete</span>
            </button>
          </div>
        </li>`);

      if(item !== "") $('.shopping-list').append(shoppingListElement);
    }); // closes map function
  }, // closes shoppingListCreateAndDisplay


  // Sets up listeners on the delete button and deletes matching array items when elements are deleted  by:
  // Targetting the root shopping list, and filtering clicks for only the delete buttons (event delegation)
  // To find the element to be targeted by clicking the delete button, we target the closest li ancestor
  // The index (in the collection of all li elements) is found with indexof(), and the appropriate index
  // deleted from the array using splice
  shoppingListDelete: function() {
    $('.shopping-list').on("click", '.shopping-item-delete', function(){
    var listItem = $(this).closest('li');
    var indexToRemove = listItem.index();
    listItem.remove();
    shoppingListState.items.splice(indexToRemove, 1);
    });
  },


  // Sets up event listeners on the check buttons to cross out element items
  // By adding a shopping-item__checked class (referenced in css)
  shoppingListCrossOut: function() {
    $('.shopping-list').on("click", '.shopping-item-toggle', function(){
      $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
  }
}

    // Main form submit listener that collects the shopping list element from the form
    // sends it to be appended to the item array
    // Then added to the DOM using the element creator
    // Button listeners added, and when element is deleted, matching array item is deleted
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      $('.shopping-list li').remove();
      var shoppingItem = $('input#shopping-list-entry').val();
      shoppingListState.addToShoppingList(shoppingItem);
      shoppingListState.shoppingListCreateAndDisplay();
    })
    shoppingListState.shoppingListDelete();
    shoppingListState.shoppingListCrossOut();
