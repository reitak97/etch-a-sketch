let color = "black";

document.addEventListener('DOMContentLoaded', () => {
    createBoard(16);
    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);

});
});
function createBoard(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover",colorDiv)
        board.insertAdjacentElement('beforeend', div);

    }
}

function getSize(){
    let input = prompt("Enter a number between 1 and 100");
    let message = document.querySelector('#message');
    if (input == ""){
        message.textContent = "You must enter a number between 1 and 100";

    }
    else if (input < 1 || input > 100){
        message.textContent = "You must enter a number between 1 and 100";
    }
    else{
        message.textContent = "Now you play!";
    }
    return input;
}

function colorDiv(){
    if (color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = 'black';
    }
}


function setColor(colorChoice){
    color = colorChoice;
    
}

function resetBoard(){
    let divs = document.querySelectorAll('.board div');
    divs.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}

