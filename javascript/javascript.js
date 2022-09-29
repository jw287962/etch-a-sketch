




let divContainer = document.querySelector('.containerAll');

makeGrid(16);
sketchHover();

//make a new grid
const button = document.querySelector('.setGrid');

button.addEventListener('click',makeNewGrid,{

});


//functions below



function sketchHover(){
    const gridBoxes = document.querySelectorAll('.grid');
    gridBoxes.forEach(div =>  div.addEventListener('mouseover',hovered, {
        capture: false,
    }));
    }


function hovered(e){
    e.stopPropagation();
 
 this.classList.add('hovered');
  

}

function makeGrid(boxesNumber){
for(p = 0; p<boxesNumber; p++){  
    let gridcontainer = document.createElement('div');
    gridcontainer.classList.add('container');
    divContainer.appendChild(gridcontainer);

for(i = 0; i<boxesNumber; i++){
    let gridbox = document.createElement('div');
    gridbox.classList.add('grid');
    gridcontainer.appendChild(gridbox);
}}}




function makeNewGrid(){
let num = prompt("Enter A NUMBER (LESS THAN 100)")
if (num >= 100)
num = 100;

removeOldGrid();
makeGrid(num);
sketchHover();
}

function removeOldGrid(){
    let gridBox = document.querySelectorAll('.grid');
    let gridContainer = document.querySelectorAll('.container');

    gridBox.forEach(div => div.remove());
    gridContainer.forEach(div => div.remove());
}