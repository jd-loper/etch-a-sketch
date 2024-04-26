const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");

let boardSize;

do {
  boardSize = prompt("Define the canvas size (e.g. 16 for a 16x16 canvas):");

  boardSize = Number(boardSize);

  if (
    isNaN(boardSize) ||
    boardSize < 1 ||
    boardSize > 100 ||
    !Number.isInteger(boardSize)
  ) {
    alert("Enter a positive number less than or equal to 100.");
  }
} while (
  isNaN(boardSize) ||
  boardSize < 1 ||
  boardSize > 100 ||
  !Number.isInteger(boardSize)
);

for (let i = 0; i < boardSize * boardSize; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.style.border = ".5px solid lightgray";
  div.style.flex = `1 0 calc(100% / ${boardSize})`;
  div.style.boxSizing = "border-box";
  div.style.aspectRatio = "1/1";

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });

  container.appendChild(div);
}

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

clearBtn.addEventListener("click", clearBoard);
