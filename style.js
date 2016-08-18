CarLot = (function (carlot) {


carlot.resetCards = function (cards) {
  console.log(cards)
    // what's cards coming through as? console.log to find out

  cards.forEach(function(card) {
    card.classList.remove("pink")

  })


}

carlot.styleCard = function (card, pink) {
card.classList.add(pink)

// pink is the variable for "pink"

}

carlot.mirrorText = function (card, userInput) {

  console.log(userInput)
  userInput.addEventListener("keyup", function (){
    if (card.classList.contains("pink")) {
     var myText = card.querySelector("p")

     myText.innerText = userInput.value

      // because it's the only paragraph in the card
    }

// just write the function inline
  })


}

return carlot
})(CarLot)