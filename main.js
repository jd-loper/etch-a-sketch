const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");
const canvasBtn = document.querySelector("#canvasBtn");

let boardSize = 16;

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

function changeCanvas() {
  container.innerHTML = "";
  let newBoardSize;

  do {
    newBoardSize = prompt(
      "Define the canvas size (e.g. 16 for a 16x16 canvas):"
    );

    newBoardSize = Number(newBoardSize);

    if (
      isNaN(newBoardSize) ||
      newBoardSize < 1 ||
      newBoardSize > 100 ||
      !Number.isInteger(newBoardSize)
    ) {
      alert("Enter a positive number less than or equal to 100.");
    }
  } while (
    isNaN(newBoardSize) ||
    newBoardSize < 1 ||
    newBoardSize > 100 ||
    !Number.isInteger(newBoardSize)
  );
  boardSize = newBoardSize;

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
}

canvasBtn.addEventListener("click", changeCanvas);

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

clearBtn.addEventListener("click", clearBoard);
