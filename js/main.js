// Declaration of the var

// Add a var library where we can add other theme
const library = {   
    dbz: [
      'img/cart1.jpg',
      'img/cart2.jpg',
      'img/cart3.jpg',
      'img/cart4.jpg',
      'img/cart5.jpg',
      'img/cart6.jpg',
      'img/cart1.jpg',
      'img/cart2.jpg',
      'img/cart3.jpg',
      'img/cart4.jpg',
      'img/cart5.jpg',
      'img/cart6.jpg',
    ],
  }
  
let images = [];
let tempElt1 = "";
let tempElt2 = "";
let click = -1;
let win = 0;
let score = 0;
let time = 0;
  
let preElt = document.querySelector("#pre");
let themesElt = document.querySelector("#themes");
let boxElts = document.getElementsByClassName("box");
let mainElt = document.querySelector(".main");
let timeElt = document.querySelector("#time");
let scoreElt = document.querySelector("#score");
let postElt = document.querySelector("#post");
let finalElt = document.querySelector("#final");
let againElt = document.querySelector("#again");

  // initiate the game with chosen theme
  themesElt.addEventListener("click", function(e) {
    if (e.target.classList.contains("themes")) {
      activateTheme(e.target.id);
      preElt.classList.add("hidden");
    }
  });
  
 function activateTheme(theme) {
    // insert theme in images array
    switch (theme) {
      case "dbz":
        for (let i=0; i<12; i++) {images.push(library.dbz[i]);}
        break;
    }
    // insert images in memory game
    for (let i=0; i<12; i++) {
      var rand = Math.floor(Math.random() * (images.length-1));
      boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
      images.splice(rand, 1);
    }
  }
  
  
  // Handle the play
  mainElt.addEventListener("click", gameLogic);
  
  function gameLogic(e) {
    // make sure the box is playable
    if (e.target.classList.contains("play")) {
      e.target.firstChild.classList.remove("hidden");
      // first of two click
      if (click < 1) {
        tempElt1 = e.target;
        // timer
        if (click === -1) {
          timer = setInterval(function() {
            time++;
            timeElt.innerHTML = time;
          }, 1000);
        }
        click = 1;
      }
  
      // second click
      else if (e.target !== tempElt1) {
        tempElt2 = e.target;
  
        // different images
        if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
          mainElt.removeEventListener("click", gameLogic);
          setTimeout( function() {
            tempElt1.firstChild.classList.add("hidden");
            tempElt2.firstChild.classList.add("hidden");
            mainElt.addEventListener("click", gameLogic);
          }, 400);
          if (score > 0){
            score -= 2;
          }
          scoreElt.innerHTML = score;
        }
  
        // same images
        else {
          score += 10;
          win += 2;
          tempElt1.firstChild.classList.add("outlined");
          tempElt2.firstChild.classList.add("outlined");
          tempElt1.classList.remove("play");
          tempElt2.classList.remove("play");
          scoreElt.innerHTML = score;
  
          // game won
          if (win === 12) {
            clearTimeout(timer);
            finalElt.innerHTML = "You won in " + time + " seconds";
            postElt.classList.remove("hidden");
          }
        }
        click = 0;
      }
    }
  }
  
  againElt.addEventListener("click", resetGame);
  
  function resetGame() {
    // reset game
    tempElt1 = "";
    tempElt2 = "";
    click = -1;
    win = 0;
    score = 0;
    time = 0;
    postElt.classList.add("hidden");
    preElt.classList.remove("hidden");
    for (let i=0; i<12; i++) {
      boxElts[i].classList.add("play");
      boxElts[i].firstChild.classList.add("hidden");
    }
    timeElt.textContent = time;
    scoreElt.textContent = score;
  }
  
  