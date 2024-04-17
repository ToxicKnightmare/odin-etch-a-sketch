const gridContainer = document.querySelector(".grid-container");

function setGridSize(squares) {
    let gridSize = (960 / squares) - 10;
    if (gridSize < 1) {
        gridSize = .5;
    }
    gridContainer.innerHTML = "";
    for (let i = 0; i < squares * squares; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.innerHTML = "<!--" + i + "-->";
        gridItem.setAttribute("style", "flex: 1 0 " + gridSize + "px; height: " + gridSize + "px;")
        gridContainer.append(gridItem);

        document.querySelectorAll('.grid-item')[i].addEventListener("mouseover", function () {
            if (document.querySelectorAll(".grid-item")[i].classList.contains("shift-black")) {
                document.querySelectorAll(".grid-item")[i].classList.remove("shift-black");
            } else {
                document.querySelectorAll(".grid-item")[i].classList.add("shift-black");
            }
        });
    }

    document.querySelector(".grid-button").innerHTML = squares + " * " + squares;
}

document.querySelector(".grid-button").addEventListener("click",function() {
    let gridDem = prompt("Set the pixels for the width an dthe height of the grid. /n Keep the number under 99.", 16)
    if (gridDem != null && gridDem < 99) {
        setGridSize(gridDem)
    }
})

setGridSize(16)