const container = document.querySelector('.container');
let grid = 95;

function changeColor() { //Create the grid and div elements
    for (i=0; i <= (grid * grid); i++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', colorBlack)
        //Mouseover to black
        container.appendChild(grid);
    }
}

function colorBlack(e) { //Change color to black
    e.target.classList.add('black');
}

function clearButton () { //Event listener for the clear button
    let clear = document.getElementById('clear');
    clear.addEventListener('click', removeColor)
}

function removeColor() { //Remove the black class from each div
    let element = document.querySelectorAll('.black');
    [].forEach.call(element, (e) => {
        e.classList.remove('black');
    })

}

changeColor();
clearButton();