// (function() {

function populatePage (inventory) {
  return new Promise (function (resolve, reject) {
  var output = document.querySelector(".output")
  console.log(output)
  var results = ""
//  created this extra variable because of some display issue

// way to shorten a for loop
//  car is like inventory[i] in this instance
// by passing in i, now we have the index
  inventory.forEach(function (car, i){
    if (i % 3 === 0) {
      results += `<div class="row">`
    }
  // when the index divided by 3 has no remainder, you want to start the new row div.

    results += `
    <div class="col-md-4 carCard" style="border-color: ${car.color}">
    <h3>${car.make}</h3>
    <h3>${car.model}</h3>
    <h3>${car.year}</h3>
    <h3>${car.price}</h3>
    <h3>${car.color}</h3>
    <h3>${car.purchased}</h3>
    <p>${car.description}</p>
    </div>
    `

    if ((i + 1) % 3 === 0) {
      results += `</div>`
    }
    // this is to say 2 + 1 = 3 % 3 ... 5+1 % 3 = no remainder because you
    // want three cars
  })
  output.innerHTML = results
// be sure to put this outside of the for loop


// you don't need this function to be exposed / as part of an IIFE

console.log(inventory)
// to make sure you're getting the inventory and It is working.


  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
resolve()

})
}
// Load the inventory and send a callback function to be
// invoked after the process is complete

// with promises this will change
// CarLot.loadInventory(populatePage);
CarLot.loadInventory()
.then (
//  then won't do anything until the promise has been resolved

// then takes a single argument of a function and that function takes an
// argument of the data returned from the promise.
  function (inventoryFromLoadInventoryResolve) {
    console.log("carPromise", inventoryFromLoadInventoryResolve)
    return populatePage(inventoryFromLoadInventoryResolve)
  },
  function (reason) {
    console.error('Something went wrong', reason)
  })

// this below will only work if the first one returns something

// each then must have its own promise to attach itself to.

.then(function () {
  CarLot.activateEvents();


});
// the important thing to know about chaining promises. For .then to work like
// you want it, it needs to have a promise return
