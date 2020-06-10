let down;

function createGrid(gridSize = 16) {
  let canvas = document.querySelector(".canvas");

  //Remove previous grid cells inside canvas if they exist
  canvas.innerHTML = "";
  canvas.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      canvas.appendChild(squareDiv);
    }
  }

  checkForUserPaintingSquares();
}

function checkForUserPaintingSquares() {
  let squares = selectSquares();

  squares.forEach((square) => {
    if (down == 1) {
      square.addEventListener("mouseover", colorSquare);
    }
    square.addEventListener("touchmove", colorSquare);
  });

  function colorSquare(e) {
    e.target.classList.add("square--colored");
  }
}

function selectSquares() {
  return document.querySelectorAll(".square");
}

function checkForClearEvent() {
  let clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", clearCanvas);
}

function clearCanvas() {
  let squares = selectSquares();

  squares.forEach((square) => {
    square.classList.remove("square--colored");
  });
}

function checkForChangeResolution() {
  let resolutionInput = document.querySelector(".resolution-input");
  console.log(resolutionInput);

  resolutionInput.addEventListener("change", () => {
    createGrid(resolutionInput.value);
  });
}

createGrid();
checkForClearEvent();
checkForChangeResolution();
