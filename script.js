function createGrid() {
  let container = document.querySelector(".container");

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      container.appendChild(squareDiv);
    }
  }
}

function paintSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", colorSquare);
  });

  function colorSquare(e) {
    e.target.classList.add("square--colored");
  }
}

createGrid();
paintSquares();
