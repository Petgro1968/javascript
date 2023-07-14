/*
Gamelet: a starting point for writing games
Author: Peter Groenendijk
Version: 1.0

Instructions:
Include  gameslet.js in an HTML documennt containing
an element with and id of 'ball'
The script will detect when gthe left, right, up or down arrow
key is pressed and will move the ball element
accordingly.
*/

const ball = document.getElementById("ball"); // get the ball
document.addEventListener("keydown", handleKeyPress); // listen for keys
let xposition = 0; // Set initial x-position
let yposition = 0; // Set initial y-position

/*
handlekeyPress
responds to certain key presses by updating position.
*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    xposition = xposition - 10;
  }
  if (e.code === "ArrowRight") {
    xposition = xposition + 10;
  }
  if (xposition < 0) {
    xposition = 500;
  }
  if (xposition > 500) {
    xposition = 0;
  }

  if (e.code === "ArrowUp") {
    yposition = yposition - 10;
  }
  if (e.code === "ArrowDown") {
    yposition = yposition + 10;
  }
  if (yposition < 0) {
    yposition = 500;
  }
  if (yposition > 500) {
    yposition = 0;
  }

  refresh(); // reposition the ball
}

/*
refresh
changes teh position of the ball
*/
function refresh() {
  ball.style.left = xposition + "px";
  ball.style.top = yposition + "px";
}
