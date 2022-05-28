const container = document.getElementById("container");


let w = 64;

for (let  i = 0; i< w; i++){
  for (let j = 0; j< w; j++){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
  }
}
container.style.setProperty('width', w *10 +"px");

const grid = document.querySelectorAll(".square");

grid.forEach(sq => {
 
  sq.addEventListener("mouseover", e =>{
    sq.style.setProperty('background-color', "black");
    console.log(sq);
    
  });
});