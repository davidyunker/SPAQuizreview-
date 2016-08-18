var CarLot = (function () {
  var inventory = [];

 return {
     getInventory: function () {
      return inventory
    },

    // now loadInventory is decoupled from the rest of our code

    // now it doesn't need to know about the rest of the code base

    loadInventory: function () {
        return new Promise ( function (resolve, reject) {
           var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.send();

      inventoryLoader.addEventListener('load', function () {
        inventory = JSON.parse(this.responseText).cars
        // need .cars because of how the JSON file is structured
        resolve(inventory) // no longer responsible for calling populatePages now calls resolve which is no longer a callback
        // resolve's partner in crime is .then. It will run once the Promise is returned to the call site.
        });
      });
    },
};
})();