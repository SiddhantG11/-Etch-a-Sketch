const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
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
  items.forEach(e => e.style.setProperty('background-color', 'transparent'));
}

// const clearButton = document.querySelector('#eraserButton');
// clearButton.addEventListener("click", clearGrid); 
// function clearGrid() {
//   console.log('hello');
// }





// for random colors 

// const borderBtn = document.querySelector('.border');
// const bgColorBtn = document.querySelector('.bgcolor');
// const colorBtn = document.querySelector('.color');
// const box = document.querySelector('.box');

// function random(min,max) {
//   const num = Math.floor(Math.random()*(max-min)) + min;
//   return num;
// }

// function randomColor() {
//   return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
// }

// const stylesheet = document.styleSheets[1];
// let boxParaRule;

// for(let i = 0; i < stylesheet.cssRules.length; i++) {
//   if(stylesheet.cssRules[i].selectorText === '.box p') {
//     boxParaRule = stylesheet.cssRules[i];
//   }
// }

// function setRandomBorder() {
//   const newBorder = random(1, 50) + 'px solid ' + randomColor();
//   boxParaRule.style.setProperty('border', newBorder);
// }

// function setRandomBgColor() {
//   const newBgColor = randomColor();
//   boxParaRule.style.setProperty('background-color', newBgColor);
// }

// function setRandomColor() {
//   const newColor = randomColor();
//   boxParaRule.style.setProperty('color', newColor);
// }

// borderBtn.addEventListener('click', setRandomBorder);
// bgColorBtn.addEventListener('click', setRandomBgColor);
// colorBtn.addEventListener('click', setRandomColor);


