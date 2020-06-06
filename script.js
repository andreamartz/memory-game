const cardsContainer = document.querySelector(".cards-container");

const PLANTS = [
  "plant1",
  "plant2",
  "plant3",
  "plant4",
  "plant5",
  "plant6",
  "plant7",
  "plant8",
  "plant1",
  "plant2",
  "plant3",
  "plant4",
  "plant5",
  "plant6",
  "plant7",
  "plant8",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array that haven't been shuffled
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledPlants = shuffle(PLANTS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForPlants(plantArray) {
  for (let plant of plantArray) {
    // create new elements that will build the card
    const cardContainer = document.createElement("div");
    const card = document.createElement("figure");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    const cardImg = document.createElement("img");

    // give elements class attributes
    cardContainer.classList.add("card-container");
    cardContainer.classList.add(`${plant}`);
    card.classList.add("card");
    cardFront.classList.add("card-front");
    cardBack.classList.add("card-back");

    // give card image src attribute
    cardImg.setAttribute(
      "src",
      `./img/memory-game-plant-images-100-times-1_5/${plant}.png`
    );

    cardFront.innerText = "MEMORY";
    // call a function handleCardClick when a div is clicked on
    // cardContainer.addEventListener("click", handleCardClick);

    // append the elements together
    cardBack.append(cardImg);
    card.append(cardFront);
    card.append(cardBack);
    cardContainer.append(card);
    cardsContainer.append(cardContainer);
  }
}

// function handleCardClick(event) {
// let clickedCard = event.target;
// nonMatches = cardsArr.filter(
// (card) => card.getAttribute("data-matched") === "no"
// );
// ***** PREVENT ILLEGAL CLICKS *****
// if (!allowClicks) return;
// if (event.target.hasAttribute("data-matched")) return;
// if (nonMatches.length === 2) return;

// Mark the clicked card as flipped and not matched
// clickedCard.classList.toggle("flipped");
// clickedCard.setAttribute("data-matched", "no");

// nonMatches = cardsArr.filter(
// (card) => card.getAttribute("data-matched") === "no"
// );

// once a turn has completed (i.e., two cards have been flipped), we need to determine whether the cards are a match
// if (nonMatches.length === 2) {
// let card1 = nonMatches[0];
// let card2 = nonMatches[1];
// if a match....
// if (card1.classList.value === card2.classList.value) {
// card1.setAttribute("data-matched", "yes");
// card2.setAttribute("data-matched", "yes");
// update the nonMatches
// nonMatches = cardsArr.filter(
// (card) => card.getAttribute("data-matched") === "no"
// );
// allowClicks = true;
// return;
// else if not a match...
// } else {
// setTimeout(function () {
// card1.classList.remove("flipped");
// card1.removeAttribute("data-matched");
// card2.classList.remove("flipped");
// card2.removeAttribute("data-matched");
// allowClicks = true;
// }, 1000);
// }
// } else return;
// }

// when the DOM loads
createDivsForPlants(shuffledPlants);
// let cards = document.querySelectorAll("#game > div");
// let cardsArr = Array.prototype.slice.call(cards);
