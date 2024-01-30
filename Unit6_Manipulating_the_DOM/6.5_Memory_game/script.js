const gameContainer = document.getElementById("game");

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
  "purple"
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

    //aslo giving it a unflipped class for looks
    newDiv.classList.add('unflipped')

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  //if statment to make sure you dont go too fast
  if (gameContainer.querySelectorAll('div:not(.unflipped):not(.matched)').length < 3){
    flipper(event)
    matchChecker()
  }
}

function flipper (event){

  if (event.target.classList.contains("unflipped")){
    let colorOfDiv = event.target.classList[0]
    event.target.classList.remove('unflipped')
    event.target.style.background = colorOfDiv
  }
}

function matchChecker(divs){
  let allFlipped = gameContainer.querySelectorAll('div:not(.unflipped):not(.matched)')
  console.log("Flipped are "+allFlipped)
  if (allFlipped.length === 2){
    console.log("Found 2!")
    console.log("The 2 are: "+ allFlipped[0].classList[0]+" and "+allFlipped[1].classList[0])
    if (allFlipped[0].classList[0] === allFlipped[1].classList[0]){
      console.log("Found a match!!")
      allFlipped[0].classList.add('matched')
      allFlipped[1].classList.add('matched')
    }else {
      console.log("Didnt find a match")

      setTimeout(function () {
        console.log("Letting the player see they're mistake")
        allFlipped[0].classList.add('unflipped')
        allFlipped[1].classList.add('unflipped')
      }, 1000)
    }
  }

  let allMatched = gameContainer.querySelectorAll('div .matched')
  let Scoreboard = document.getElementById('scoreNum')
  if(allMatched.length === 10){
      Scoreboard.innerText = (parseInt(Scoreboard.innerText)+1).toString()
      scoreManger()
  }
}

function startGame(){

  //startbutton listener assignment
  const startButton = document.getElementById('startButton')
  startButton.addEventListener('click',function () {
    startButton.parentElement.remove()
    console.log("Removed start overlay")
  })

  //restartbutton listener assignment
  const restartButton = document.getElementById('restart')
  restartButton.addEventListener('click', function () {
    console.log("restartingggggg")
    gameContainer.innerHTML = ''
    shuffle(COLORS)
    createDivsForColors(COLORS)
  })
}

function scoreManger(){
  console.log("Managing score")
  var Scoreboard = document.getElementById('scoreNum')
  var localScoreboard = parseInt(localStorage.getItem('score'))

  //Case 1 if score dosnt exist locally make one
  //case 2 if scoreboard number is high than local storage sync the scores
  //case 3 of local score exists than sync scores

  if (isNaN(localScoreboard)){
    console.log("nothing stored")
    localStorage.setItem('score', Scoreboard.innerText)
  }else if (parseInt(Scoreboard.innerText) > localScoreboard){
    console.log("Syncing local storage to scoreboard")
    localStorage.setItem('score', Scoreboard.innerText)
  }else if (localScoreboard > parseInt(Scoreboard.innerText)){
    console.log("syncing scoreboard to local storage")
    Scoreboard.innerText = localScoreboard
  }else{
    console.log("Nothing happend")
  }
}



// when the DOM loads
createDivsForColors(shuffledColors);
startGame()
scoreManger()
