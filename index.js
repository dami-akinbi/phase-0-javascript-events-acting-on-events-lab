// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "papayawhip";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", ""); // strip off the unit of measurement
  const left = +leftNumbers; // convert what's left to number
  if (left > 0) dodger.style.left = `${left - 1}px`; // decrement by 1, interpolate with px again
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = +leftNumbers;
  if (left < 360) dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function (event) {
  // console.log(event);
  if (event.key === "ArrowLeft") moveDodgerLeft(); // if ArrowLeft is pressed, fire the function
  if (event.key === "ArrowRight") moveDodgerRight();
});
