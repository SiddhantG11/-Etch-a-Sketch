const container = document.getElementById("container");


function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const items = document.querySelectorAll(".grid-item");

 items.forEach(e => {
    e.addEventListener('mouseover', event => {
      event.target.style.backgroundColor = "black";
    })
  })

function clearGrid() {
  const items = document.querySelectorAll(".grid-item");
  items.forEach(e => e.style.setProperty('background-color', 'transparent'));
}

function changeSize() {
  let input = prompt('How many squares would you like?');
  if(input < 2 || input > 64){
    alert('Input between 2 and 64 only!')
    return false;
  }
  else {
  clearGrid();
  makeRows(input,input);
  const items = document.querySelectorAll(".grid-item");
 items.forEach(e => {
    e.addEventListener('mouseover', event => {
      event.target.style.backgroundColor = "black";
    })
  })
  }
}
