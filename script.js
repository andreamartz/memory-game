const cardsContainer = document.querySelector(".cards-container");
let allowClicks = true;
let card1 = null;
let card2 = null;
let numFlipped = 0;

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
console.log(shuffledPlants);

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
    cardContainer.addEventListener("click", handleCardClick);

    // append the elements together
    cardBack.append(cardImg);
    card.append(cardFront);
    card.append(cardBack);
    cardContainer.append(card);
    cardsContainer.append(cardContainer);
  }
}

function handleCardClick(event) {
  // ***** PREVENT ILLEGAL CLICKS *****
  if (!allowClicks) return;
  if (numFlipped === 2) return;

  console.log(allowClicks, numFlipped);

  // save the target card container to a variable and add class "flipped"
  let clickedCardContainer = event.currentTarget;
  clickedCardContainer.classList.add("flipped");

  // AT LEAST ONE CARD FLIPPED
  // assign the clicked card to either card1 or card2
  if (!card1 || !card2) {
    card1 = card1 || clickedCardContainer;
    card2 = clickedCardContainer === card1 ? null : clickedCardContainer;
  }

  // TWO CARDS FLIPPED
  if (card1 && card2) {
    allowClicks = false;
    console.log("card1 class name: ", card1.className);
    console.log("card2 class name: ", card2.className);
    // a match
    if (card1.className === card2.className) {
      // leave them flipped
      // remove their event handlers
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      // set card1 and card2 back to null
      card1 = null;
      card2 = null;
      // allow clicks
      allowClicks = true;
      // not a match
    } else {
      // mark
      setTimeout(function () {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        allowClicks = true;
        numFlipped = 0;
      }, 1000);
    }
  }
}
// are the two cards not matches?

// nonMatches = cardsArr.filter(
//   (card) => card.getAttribute("data-matched") === "no"
// );

//   // Mark the clicked card as flipped and not matched
//   clickedCard.classList.toggle("flipped");
//   clickedCard.setAttribute("data-matched", "no");

//   nonMatches = cardsArr.filter(
//     (card) => card.getAttribute("data-matched") === "no"
//   );

//   // once a turn has completed (i.e., two cards have been flipped), we need to determine whether the cards are a match
//   if (nonMatches.length === 2) {
//     let card1 = nonMatches[0];
//     let card2 = nonMatches[1];
//     // if a match....
//     if (card1.classList.value === card2.classList.value) {
//       card1.setAttribute("data-matched", "yes");
//       card2.setAttribute("data-matched", "yes");
//       // update the nonMatches
//       nonMatches = cardsArr.filter(
//         (card) => card.getAttribute("data-matched") === "no"
//       );
//       allowClicks = true;
//       return;
//       // else if not a match...
//     } else {
//       setTimeout(function () {
//         card1.classList.remove("flipped");
//         card1.removeAttribute("data-matched");
//         card2.classList.remove("flipped");
//         card2.removeAttribute("data-matched");
//         allowClicks = true;
//       }, 1000);
//     }
//   } else return;
// }

// when the DOM loads
createDivsForPlants(shuffledPlants);
let cards = document.querySelectorAll("#game > div");
let cardsArr = Array.prototype.slice.call(cards);

// function handleCardClick(e) {
//   if (noClicking) return;
//   if (e.target.classList.contains("flipped")) return;

//   let currentCard = e.target;
//   currentCard.style.backgroundColor = currentCard.classList[0];

//   if (!card1 || !card2) {
//     currentCard.classList.add("flipped");
//     card1 = card1 || currentCard;
//     card2 = currentCard === card1 ? null : currentCard;
//   }

//   if (card1 && card2) {
//     noClicking = true;
//     // debugger
//     let gif1 = card1.className;
//     let gif2 = card2.className;

//     if (gif1 === gif2) {
//       cardsFlipped += 2;
//       card1.removeEventListener("click", handleCardClick);
//       card2.removeEventListener("click", handleCardClick);
//       card1 = null;
//       card2 = null;
//       noClicking = false;
//     } else {
//       setTimeout(function () {
//         card1.style.backgroundColor = "";
//         card2.style.backgroundColor = "";
//         card1.classList.remove("flipped");
//         card2.classList.remove("flipped");
//         card1 = null;
//         card2 = null;
//         noClicking = false;
//       }, 1000);
//     }
//   }

//   if (cardsFlipped === COLORS.length) alert("game over!");
// }
//
