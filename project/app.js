const grid = document.querySelector('.grid')
const start = document.querySelector('#start')
const width = 10
const cells = []
let snakeDirection = ''
const displayScore = document.querySelector('#score')
let score = 0
let speed = 1
let aSnake = [2, 1, 0]
let food = 0
let intervalId = 0
let intervalTime = 0
let currentPosition = 0
let randomPosition
let foodAmount = 0











for (let index = 0; index < width ** 2; index++) {
  // ? Generate each element
  const cell = document.createElement('div')
  cell.classList.add('cell')
  grid.appendChild(cell)
  cells.push(cell)
  // ? Number each cell by its index.

  cell.id = index

  // ? Set the width and height of my cells
  cell.style.width = `${100 / width}%`
  cell.style.width = `${100 / width}%`
}





document.addEventListener('keyup', (event) => {
  const key = event.key
  if (key === 'ArrowRight' && !(aSnake[0] % width === width - 1)) {  //right  side
    snakeDirection = 'ArrowRight'
    console.log(event)
  } else if (key === 'ArrowLeft' && !(aSnake[0] % width === 0)) {    //left side
    snakeDirection = 'ArrowLeft'
    console.log(event)
  } else if (key === 'ArrowDown' && !(aSnake[0] + width >= width ** 2)) {  //bottom row
    snakeDirection = 'ArrowDown'
    console.log(event)
  } else if (key === 'ArrowUp' && !(aSnake[0] < width)) {                  //top row
    snakeDirection = 'ArrowUp'
    console.log(event)
  }

})


intervalId = setInterval(() => {

  gameOver()
  randomFood()
  


  if (snakeDirection === 'ArrowRight' && !(aSnake[0] % width === width - 1)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))
    aSnake.pop()
    console.log(aSnake[0])
    aSnake.unshift(aSnake[0] += 1)
    eatFood()
    console.log(aSnake[0])
    
    aSnake.forEach(index => cells[index].classList.add('snake'))
  } else if (snakeDirection === 'ArrowLeft' && !(aSnake[0] % width === 0)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))
    aSnake.pop()
    console.log(aSnake[0])
    aSnake.unshift(aSnake[0] -= 1)
    console.log(aSnake[0])
    eatFood()
    aSnake.forEach(index => cells[index].classList.add('snake'))


  } else if (snakeDirection === 'ArrowDown' && !(aSnake[0] + width >= width * width)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))
    aSnake.pop()
    console.log(aSnake[0])
    aSnake.unshift(aSnake[0] += width)
    console.log(aSnake[0])
    eatFood()
    aSnake.forEach(index => cells[index].classList.add('snake'))

  } else if (snakeDirection === 'ArrowUp' && !(aSnake[0] - width <= 0)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))
    aSnake.pop()
    aSnake.unshift(aSnake[0] -= width)
    eatFood()
    aSnake.forEach(index => cells[index].classList.add('snake'))
  }


}, 1000)




function gameOver() {


  if (
    (aSnake[0] + width >= (width * width) && snakeDirection === 'ArrowDown') ||
    (aSnake[0] % width === width - 1 && snakeDirection === 'ArrowRight') ||
    (aSnake[0] % width === 0 && snakeDirection === 'ArrowLeft') ||
    (aSnake[0] - width <= 0 && snakeDirection === 'ArrowUp')) {
    //(aSnake[0] - aSnake[1,0])) {
    alert('Game over')
    clearInterval(intervalId)
  }
}









function gameStart() {

  aSnake.forEach(index => cells[index].classList.remove('snake'))
  cells[food].classList.remove('food')
  clearInterval(intervalId)
  score = 0
  snakeDirection = ''
  displayScore.innerHTML = score
  currentPosition = 0
  aSnake.forEach(index => cells[index].classList.add('snake'))
  setInterval(intervalId)

}

start.addEventListener('click', gameStart)





function randomFood() {

  if (foodAmount === 0) {




    randomPosition = cells[Math.floor(Math.random() * cells.length)]
    randomPosition.classList.add('food')
    foodAmount++
  }
}




function eatFood() {
  console.log(cells[aSnake[0]])
  if (cells[aSnake[0]].classList.contains('food')) {
    cells[aSnake[0]].classList.remove('food')
    
    aSnake.push(aSnake[0])
    score ++
    foodAmount --


    // if (snakeDirection === 'ArrowRight') {
    //   cells[aSnake[0]].classList.remove('food')
    //   console.log(aSnake[0])
    //   aSnake.push(aSnake[aSnake.length - 1] += 1)
    //   console.log(aSnake[0])
    //   score++
    //   foodAmount--
    // } else if (snakeDirection === 'ArrowLeft') {
    //   cells[aSnake[0]].classList.remove('food')
    //   console.log(aSnake[0])
    //   aSnake.push(aSnake[aSnake.length - 1] -= 1)
    //   console.log(aSnake[0])
    //   score++
    //   foodAmount--
    // } else if (snakeDirection === 'ArrowDown') {
    //   cells[aSnake[0]].classList.remove('food')
    //   console.log(aSnake[0])
    //   aSnake.push(aSnake[aSnake.length - 1] += width)
    //   console.log(aSnake[0])
    //   score++
    //   foodAmount--
    // } else if (snakeDirection === 'ArrowUp') {
    //   cells[aSnake[0]].classList.remove('food')
    //   console.log(aSnake[0])
    //   aSnake.push(aSnake[aSnake.length - 1] -= width)
    //   console.log(aSnake[0])
    //   score++
    //   foodAmount--
    // }

  }




}


