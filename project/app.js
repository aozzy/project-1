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
let randomPosition = 0











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

//cells[aSnake].classList.add('snake')



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

  //gameOver()
  
  
  if (snakeDirection === 'ArrowRight' && !(aSnake[0] % width === width - 1)) {
    //console.log
    aSnake.forEach(index => cells[index].classList.remove('snake'))
    aSnake.pop()
    aSnake.unshift(aSnake[0]  += 1 ) 
    console.log(aSnake)

    aSnake.forEach(index => cells[index].classList.add('snake'))
  } else if (snakeDirection === 'ArrowLeft' && !(aSnake[0] % width === 0)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))
    aSnake.pop()
    aSnake.unshift(aSnake[0]  -= 1 )
    //aSnake.forEach((index, i) => aSnake[i] -= 1)



    aSnake.forEach(index => cells[index].classList.add('snake'))


  } else if (snakeDirection === 'ArrowDown' && !(aSnake[0] + width >= width * width)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))


    //aSnake.forEach((index, i) => aSnake[i] += width)
    
    aSnake.pop()
    aSnake.unshift(aSnake[0]  += width ) 

    aSnake.forEach(index => cells[index].classList.add('snake'))

  } else if (snakeDirection === 'ArrowUp' && !(aSnake[0] - width <= 0)) {

    aSnake.forEach(index => cells[index].classList.remove('snake'))
    
    aSnake.pop()
    aSnake.unshift(aSnake[0]  -= width )

    //aSnake.forEach((index, i) => aSnake[i] -= width)


    aSnake.forEach(index => cells[index].classList.add('snake'))
  }


}, 1000)




function gameOver() {


  if (
    (aSnake[0] + width >= (width * width) && snakeDirection === 'ArrowDown') ||
    (aSnake[0] % width === width - 1 && snakeDirection === 'ArrowRight') ||
    (aSnake[0] % width === 0 && snakeDirection === 'ArrowLeft') ||
    (aSnake[0] - width <= 0 && snakeDirection === 'ArrowUp')) {
    //(cells[aSnake[0] + snakeDirection].classList.contains('snake'))) {
    alert('Game over')
    clearInterval(intervalId)
  }





  gameOver()




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





  function randomFood(cells) {

    food = Math.floor(Math.random() * cells.length)
    food.classList.add('food')
  
  }
  
  
  
}
/*function randomfood() {
  cells.forEach(cell => {
    cell.classList.remove('food')
  })
  randomPosition = cells[Math.floor(Math.random() * cells.length)]
  randomPosition.classList.add('food')

} */



// (cells[food].classList.contains('snake'))
// cells[food].classList.add('food')


