function createGrid() {
  let canvas = document.querySelector(".canvas");

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      canvas.appendChild(squareDiv);
    }
  }
}

function paintSquares() {
  let squares = selectSquares();
  squares.forEach((square) => {
    square.addEventListener("mouseenter", colorSquare);
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

createGrid();
paintSquares();
checkForClearEvent();
