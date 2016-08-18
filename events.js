CarLot = (function (carlot) {

carlot.activateEvents = function () {
  var cards = document.querySelectorAll(".carCard")
  console.log(cards)
//  this wasn't working because the called function was commented out on the
//  other JS file. We weren't actually calling the function yet

cards.forEach(function (card) {
  card.addEventListener("click", function (){
    var userInput = document.querySelector("#userInput")
    userInput.value = ""
    userInput.focus()
    CarLot.resetCards(cards)
    CarLot.styleCard(card, "pink")
    CarLot.mirrorText(card, userInput)
   // now have to create these functions

  })

})

}

return carlot
})(CarLot);

