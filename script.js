const container = document.querySelector('#container');
function makeGrid(rows,cols) {
container.style.setProperty('grid-template-rows', rows);
container.style.setProperty('grid-template-columns', cols);
for (let i = 0; i < (rows*cols); i++) {    
    let cell = document.createElement("div");
    cell.innerText = (i+1);
    container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16,16);
