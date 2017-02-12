var shoppingListState = {
  items: ["oranges", "bread", "milk"],
  addToShoppingList: function(item) {
    this.items.push(item);
  },

  shoppingListCreateAndDisplay: function() {
   this.items.map(function(item){
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
        </li>`)

      if (item === "") {
        return
      } else {
        $('.shopping-list').append(shoppingListElement);
      };
    });

  },


  shoppingListDelete: function() {
    $('.shopping-list').on("click", '.shopping-item-delete', function(){
    var listItem = $(this).closest('li');
    var indexToRemove = listItem.index();
    listItem.remove();
    shoppingListState.items.splice(indexToRemove, 1);
    });
  },

  shoppingListCrossOut: function() {
    $('.shopping-list').on("click", '.shopping-item-toggle', function(){
      $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
  }
}


    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      $('.shopping-list li').remove();
      var shoppingItem = $('input#shopping-list-entry').val();
      shoppingListState.addToShoppingList(shoppingItem);
      shoppingListState.shoppingListCreateAndDisplay();
    })
    shoppingListState.shoppingListDelete();
    shoppingListState.shoppingListCrossOut();
