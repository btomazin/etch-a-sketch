function getContainer() {
  return document.getElementById("container");
}

function getColor() {
  return document.getElementById("RGB").textContent;
}

function setup(size){
  createGrid(size);
  createListeners();
}

setup(16);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function randColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

 RGB.onclick = () =>{
   if (RGB.textContent === "Black")
      RGB.textContent = "Random";
    else
      RGB.textContent = "Black";
}

clean.onclick = () =>{
  let gSize = prompt("Grid size?", '');
  if (gSize>100){ 
    gSize=100;
  }
  else if (gSize<0 || isNaN(gSize)|| gSize==='') 
    gSize=16;
  
  if (gSize!= null){
    removeAllChildNodes(getContainer());
    setup(gSize);
  }
}

function createGrid (size){
  for (let  i = 0; i< size; i++){
    for (let j = 0; j< size; j++){
      let square = document.createElement('div');
      square.setAttribute('class', 'square');
      square.style.setProperty("width", 960/size + "px");
      square.style.setProperty("height", 960/size+ "px");
      getContainer().appendChild(square);
    }
  }
}

function darken(sq){
  let brightness = sq.style.filter;
  let num = parseInt(brightness.match(/\d+/g));
  if (num > 0){
    num = num - 10;
    sq.style.filter = "brightness(" + num + "%)";
  }
}

function colorSquare (sq) {
  if (getColor() === "Random") {
    sq.style.setProperty('background-color', "black");  
    sq.setAttribute('id', 'black');
  } else {
    if (sq.id !== 'black' && sq.className !== 'colored') {
      sq.style.setProperty('background-color', randColor());
      sq.setAttribute('class', 'colored');
      sq.style.filter = "brightness(100%)";
    } else {
        darken(sq);
    }
  }
}

function createListeners(){
  const grid = document.querySelectorAll(".square");

  grid.forEach(sq => {
    sq.addEventListener("mouseout", e =>{
        colorSquare(sq);
      } 
    )}
  );
}
