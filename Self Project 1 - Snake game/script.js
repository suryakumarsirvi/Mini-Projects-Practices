const container = document.querySelector('.container');
const score = document.querySelector('.score');
const boxHeight = 30;
const boxWidth = 30;
const cols = Math.floor(container.clientWidth / boxWidth);
const rows = Math.floor(container.clientHeight / boxHeight);


let scoreCount = 0;
const block = [];
const snake = [
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
]

let food = { x: `${Math.floor(Math.random() * rows)}`, y: `${Math.floor(Math.random() * cols)}` }



let direction = 'right';

document.addEventListener("keydown", (e) => {

    if (e.key == "ArrowDown") {
        direction = "down";
    } else if (e.key == "ArrowUp") {
        direction = "up";
    } else if (e.key == "ArrowLeft") {
        direction = "left";
    }
    else if (e.key == "ArrowRight") {
        direction = "right";
    }

})


for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        // box.innerHTML = `${row}-${col}`;
        block[`${row}-${col}`] = box
    }
}


function render() {
    let head;

    block[`${food.x}-${food.y}`].classList.add('food');



    if (direction === 'left') {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    }
    if (direction == "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    }
    if (direction == "up") {
        head = { x: snake[0].x - 1, y: snake[0].y }
    }
    if (direction == "down") {
        head = { x: snake[0].x + 1, y: snake[0].y }

    }

    if (head.x == food.x && head.y == food.y) {
        block[`${food.x}-${food.y}`].classList.remove('food');
        food = { x: `${Math.floor(Math.random() * rows)}`, y: `${Math.floor(Math.random() * cols)}` }
        block[`${food.x}-${food.y}`].classList.add('food');
        snake.unshift(head);
        scoreCount +=10;
        score.textContent = scoreCount;

    }


    snake.forEach((element) => {
        block[`${element.x}-${element.y}`].classList.remove("fill");
    });

    snake.unshift(head)
    snake.pop();

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        alert("Game Over");
        clearInterval(intervalId);
    }

    snake.forEach((element, idx) => {
        block[`${element.x}-${element.y}`].classList.add("fill");
    });


}

intervalId = setInterval(() => {
    render();
}, 100)