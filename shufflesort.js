let sortedCards = [...document.getElementById("shuffle").children];

function shuffleCards() {
  let parent = document.getElementById("shuffle");
  let divs = [...parent.children];
  while (divs.length) {
    let randomNumber = Math.floor(Math.random() * divs.length);
    parent.append(divs.splice(randomNumber, 1)[0]);
  }
}

function sortCards() {
  let parent = document.getElementById("shuffle");
  let i = 0;
  while (i < sortedCards.length) {
    parent.append(sortedCards[i]);
    i++;
  }
}
