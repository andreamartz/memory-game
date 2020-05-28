const gameContainer = document.getElementById("game");
let allowClicks = true;
let nonMatches;
let 

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
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

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  let clickedCard = event.target;
  nonMatches = cardsArr.filter(
    (card) => card.getAttribute("data-matched") === "no"
  );
  // ***** PREVENT ILLEGAL CLICKS *****
  if (!allowClicks) return;
  if (event.target.hasAttribute("data-matched")) return;
  if (nonMatches.length === 2) return;

  // Mark the clicked card as flipped and not matched
  clickedCard.classList.toggle("flipped");
  clickedCard.setAttribute("data-matched", "no");

  nonMatches = cardsArr.filter(
    (card) => card.getAttribute("data-matched") === "no"
  );

  // once a turn has completed (i.e., two cards have been flipped), we need to determine whether the cards are a match
  if (nonMatches.length === 2) {
    let card1 = nonMatches[0];
    let card2 = nonMatches[1];
    // if a match....
    if (card1.classList.value === card2.classList.value) {
      card1.setAttribute("data-matched", "yes");
      card2.setAttribute("data-matched", "yes");
      // update the nonMatches
      nonMatches = cardsArr.filter(
        (card) => card.getAttribute("data-matched") === "no"
      );
      allowClicks = true;
      return;
      // else if not a match...
    } else {
      setTimeout(function () {
        card1.classList.remove("flipped");
        card1.removeAttribute("data-matched");
        card2.classList.remove("flipped");
        card2.removeAttribute("data-matched");
        allowClicks = true;
      }, 1000);
    }
  } else return;
}

// when the DOM loads

let cards = document.querySelectorAll("#game > div");
let cardsArr = Array.prototype.slice.call(cards);
