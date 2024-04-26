const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.style.border = "1px solid black";
  div.style.flex = "1 0 calc(100% / 16)";
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
