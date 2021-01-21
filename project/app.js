const grid = document.querySelector('.grid')
const start = document.querySelector('#start')
const width = 10
const cells = []
let snakeDirection = ''
const displayScore = document.querySelector('#score')
let score = 0
let speed = 0.9
let aSnake = [2, 1, 0]
let food = 0
let intervalId = 0
let intervalTime = 1000
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
  //cell.innerHTML = index

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


function snake() {
  intervalId = setInterval(() => {

    gameOver()
    randomFood()
    //console.log(aSnake)
    //console.log(aSnake.indexOf(aSnake[0], 2))


    if (snakeDirection === 'ArrowRight' && !(aSnake[0] % width === width - 1)) {

      aSnake.forEach(index => cells[index].classList.remove('snake'))
      console.log(cells[aSnake[0]])   
      if (!cells[aSnake[0]].classList.contains('food')) {
        aSnake.pop()

      } else {
        console.log('food eaten')
        eatFood()
      }
      //console.log(aSnake[0])
      aSnake.unshift(aSnake[0] + 1)
      // console.log(aSnake[0])

      aSnake.forEach(index => cells[index].classList.add('snake'))
    } else if (snakeDirection === 'ArrowLeft' && !(aSnake[0] % width === 0)) {

      aSnake.forEach(index => cells[index].classList.remove('snake'))
      console.log(cells[aSnake[0]])   
      if (!cells[aSnake[0]].classList.contains('food')) {
        aSnake.pop()

      } else {
        console.log('food eaten')
        eatFood()
      }

      
      aSnake.unshift(aSnake[0] - 1)
      

      aSnake.forEach(index => cells[index].classList.add('snake'))


    } else if (snakeDirection === 'ArrowDown' && !(aSnake[0] + width >= width * width)) {

      aSnake.forEach(index => cells[index].classList.remove('snake'))
      console.log(cells[aSnake[0]])   

      if (!cells[aSnake[0]].classList.contains('food')) {
        aSnake.pop()


      } else {
        console.log('food eaten')
        eatFood()
      }
      //console.log(aSnake[0])
      aSnake.unshift(aSnake[0] + width)
      // console.log(aSnake[0])
      aSnake.forEach(index => cells[index].classList.add('snake'))

    } else if (snakeDirection === 'ArrowUp' && !(aSnake[0] + 1 - width <= 0)) {

      aSnake.forEach(index => cells[index].classList.remove('snake'))
      console.log(cells[aSnake[0]])      
      if (!cells[aSnake[0]].classList.contains('food')) {
        aSnake.pop()
        
      } else {
        console.log('food eaten')
        eatFood()
      }
      aSnake.unshift(aSnake[0] - width)
      aSnake.forEach(index => cells[index].classList.add('snake'))
    }


  }, intervalTime)

}
snake()

function gameOver() {


  if (

    (aSnake[0] + width >= (width * width) && snakeDirection === 'ArrowDown') ||
    (aSnake[0] % width === width - 1 && snakeDirection === 'ArrowRight') ||
    (aSnake[0] % width === 0 && snakeDirection === 'ArrowLeft') ||
    (aSnake[0] + 1 - width <= 0 && snakeDirection === 'ArrowUp') ||
    (aSnake.indexOf(aSnake[0], 1) !== -1)) {




    alert('Game over')
    displayScore.innerHTML = score
    clearInterval(intervalId)
  }
}

//(aSnake.indexOf(aSnake[0]) === aSnake.indexOf(aSnake[0], 1)))

function gameStart() {

  aSnake.forEach(index => cells[index].classList.remove('snake'))
  cells[food].classList.remove('food')
  clearInterval(intervalId)
  score = 0
  snakeDirection = ''
  displayScore.innerHTML = score
  //currentPosition = 0
  aSnake.forEach(index => cells[index].classList.add('snake'))
  setInterval(intervalId)
  randomFood()
}

start.addEventListener('click', gameStart)



function randomFood() {

  if (foodAmount === 0) {

    randomPosition = Math.floor(Math.random() * cells.length)
    console.log(randomPosition)
    while (cells[randomPosition].classList.contains('snake')) {
      randomPosition = Math.floor(Math.random() * cells.length)
    }


    cells[randomPosition].classList.add('food')
    foodAmount++
  }
}

function eatFood() {
  //console.log(cells[aSnake[0]])
  if (cells[aSnake[0]].classList.contains('food')) {
    cells[aSnake[0]].classList.remove('food')

    // aSnake.push(aSnake[0])
    score++
    foodAmount--
    clearInterval(intervalId)
    intervalTime = intervalTime * speed
    snake()



  }
}
















// while (cells[randomPosition].classList.contains('aSnake')){
//   cells[randomPosition].classList.add('food')
// }




