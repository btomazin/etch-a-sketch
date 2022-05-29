const getContainer = () =>  document.getElementById("container");

function setup(size){
  createGrid(size);
  createListeners();
}

let clr = "black";
setup(16);



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function randColor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

 RGB.onclick = () =>{
   clr = randColor();
   console.log(RGB);
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

function createListeners(){
  const grid = document.querySelectorAll(".square");

  grid.forEach(sq => {
    sq.addEventListener("mouseout", e =>{
      sq.style.setProperty('background-color', "black");    
    });
  });
}
