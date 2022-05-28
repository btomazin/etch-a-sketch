const container = document.getElementById("container");



let w = 16;
let clr = "black";
createGrid(w);
createListeners();

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function randColor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

// RGB.onclick = () =>{
//   clr = randColor();
// }

clean.onclick = () =>{
  removeAllChildNodes(container);
  w = prompt("Grid size?", w);
  if (w>100) w=100;
  createGrid(w);
  createListeners();
}

function createGrid (w){
  for (let  i = 0; i< w; i++){
    for (let j = 0; j< w; j++){
      let square = document.createElement('div');
      square.setAttribute('class', 'square');
      square.style.setProperty("width", 960/w + "px");
      square.style.setProperty("height", 960/w+ "px");
      container.appendChild(square);
    }
  }
}

function createListeners(){
  const grid = document.querySelectorAll(".square");

  grid.forEach(sq => {
    sq.addEventListener("mouseover", e =>{
      sq.style.setProperty('background-color', "black");    
    });
  });
}
