// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");
let wakeup = document.querySelector(".wakeup-screen");
let stayhome = document.querySelector(".stayhome-screen");
let outside = document.querySelector(".outside-screen");
let outside2 = document.querySelector(".outside2-screen");
let novel = document.querySelector(".novel-screen");
let novel2 = document.querySelector(".novel2-screen");
let novel3 = document.querySelector(".novel3-screen");
let game = document.querySelector(".game-screen");

// buttons 
let homeButton = document.querySelector(".home-button");
let outButton = document.querySelector(".out-button");
let readButton = document.querySelector(".read-button");
let gameButton = document.querySelector(".games-button");





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

storyOpening.addEventListener('click', function(){
  storyOpening.style.display = 'none';
  wakeup.style.display = 'block';
});

homeButton.addEventListener('click', function(){
  wakeup.style.display = 'none';
  stayhome.style.display = 'block';
});

outButton.addEventListener('click', function(){
  wakeup.style.display = 'none';
  outside.style.display = 'block';
});

readButton.addEventListener('click', function(){
  stayhome.style.display = 'none';
  novel.style.display = 'block';
});

gameButton.addEventListener('click', function(){
  stayhome.style.display = 'none';
  game.style.display = 'block';
});
