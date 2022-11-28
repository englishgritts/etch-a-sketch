const container = document.querySelector('.container');
let grid = 16;

for (i=0; i <= (grid * grid); i++) {
    const grid = document.createElement('div');
    grid.addEventListener('mouseover', colorBlack)
    container.appendChild(grid);

}

function colorBlack(e) {
    e.target.classList.add('black');
}