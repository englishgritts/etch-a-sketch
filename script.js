const container = document.querySelector('.container');
let grid = 16;

function changeColor() {
    for (i=0; i <= (grid * grid); i++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', colorBlack)
        container.appendChild(grid);
    
    }
}

function colorBlack(e) {
    e.target.classList.add('black');
}

function clearButton () {
    let clear = document.getElementById('clear');
    clear.addEventListener('click', removeColor)
}

function removeColor() {
    let element = document.querySelector('.black');
    element.classList.remove('black');
}

changeColor();
clearButton();