const container = document.getElementById("container");


let w = 16;

for (let  i = 0; i< w; i++){
  for (let j = 0; j< w; j++){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    //square.textContent = "s";
    container.appendChild(square);
  }
}

container.style.setProperty('width', w *10 +"px");
