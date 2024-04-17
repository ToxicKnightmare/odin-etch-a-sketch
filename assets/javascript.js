const gridContainer =  document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerHTML = i;
    gridContainer.append(gridItem);
}