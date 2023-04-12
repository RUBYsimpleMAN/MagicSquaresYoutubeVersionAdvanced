const container = document.getElementById('container')
console.log(container)
const SQUARES = 160
const extraSQUARES = 4
const colors = ['silver', 'Crimson', 'IndianRed', 'LightSalmon',
                'Salmon', 'DarkRed', 'DarkSalmon', 'Red',
                'Tomato', 'LimeGreen', 'FireBrick', 'PaleVioletRed',
                'Yellow', 'OrangeRed', 'DeepPink', 'Coral',
                'Orchid', 'SandyBrown', 'Moccasin', 'Gold',
                'Brown', 'LightSteelBlue', 'PeachPuff', 'DarkKhaki',
                'Gainsboro', 'MediumOrchid', 'LightCoral',
                'MediumTurquoise', 'YellowGreen', 'Lime',
                'DarkSeaGreen', 'MediumSeaGreen', 'Blue', 'Aqua',
                'LightSeaGreen', 'MediumAquamarine' ]

for (let i=0; i < SQUARES; i++) {
  const squareCreation = document.createElement('div')
  console.log('squareCreation', squareCreation)
  squareCreation.classList.add('square')
  console.log('StyledSquareCreation', squareCreation)
  container.appendChild(squareCreation)
}
const squares = document.getElementsByClassName('square')
console.log('squares', squares)


for (let s = 0; s < squares.length; s++) {
  // const square = document.querySelector('.square')
  const square = squares[s]
  
  console.log('square-element', square)

  // squares[s].addEventListener('click', () => {
  //   setColor(square)
  // })

  square.addEventListener('touchstart', () => {
    setColor(square)
  })
  square.addEventListener('touchmove', () => {
    setColor(square)
  })
  square.addEventListener('touchend', () => {
    removeColor(square)
  })
}

function setColor(el) {
  const color = getRandomColor()
  el.style.background = color
  // el.currentTarget.style.border.color = color
}

function removeColor(el) {
  el.style.background = 'transparent'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // square.addEventListener('mouseover', () => {
  //   setColor(square)
  // })
  // square.addEventListener('mouseout', () => {
  //   removeColor(square)
  // })
  // square.addEventListener('mousedown', () => {
  //   setColor(square)
  // })
  // square.addEventListener('mousemove', () => {
  //   setColor(square)
  // })
  // square.addEventListener('mouseup', () => {
  //   setColor(square)
  //   removeColor(square)
  // })
  // square.addEventListener('click', () => {
  //   setColor(square)
  // })

  // for (let index=0; index < extraSQUARES; index++) {
  //   const extraSquare = document.createElement('div')
  //   extraSquare.classList.add('extraSquare')
  //   extraSquare.addEventListener('mouseover', () => {
  //     setColor(extraSquare)
  //   })
  //   extraSquare.addEventListener('mouseout', () => {
  //     removeColor(extraSquare)
  //   })
  //   extraSquare.addEventListener('touchstart', () => {
  //     setColor(extraSquare)
  //   })
  //   extraSquare.addEventListener('touchmove', () => {
  //     setColor(extraSquare)
  //   })
  //   extraSquare.addEventListener('touchend', () => {
  //     removeColor(extraSquare)
  //   })
  //   square.appendChild(extraSquare)
  // }



  // event.target.innerHTML = 0
  // container.innerHTML = 0
  // console.log("touch")
  // console.log(event)
  // console.log(event.target)
  // console.log(event.currentTarget)





// function responsEvent(event) {
  // pShort.innerText = event.type
  // pLongText.innerText = event.type + ', ' + pLongText.innerText
// }

// Keyboard events
// document.addEventListener('keydown', responsEvent, false)
// document.addEventListener('keypress', responsEvent, false)
// document.addEventListener('keyup', responsEvent, false)

// Mouse events
// document.addEventListener('mousedown', responsEvent, false)
// document.addEventListener('mousemove', responsEvent, false)
// document.addEventListener('mouseup', responsEvent, false)
// document.addEventListener('click', responsEvent, false)

// Touch events
// document.addEventListener('touchstart', responsEvent, false)
// document.addEventListener('touchmove', responsEvent, false)
// document.addEventListener('touchend', responsEvent, false)



// const touchZoneFirst = document.querySelector('.touchZoneFirst__css-class');
// touchZoneFirst.addEventListener('touchstart', touchSTARTfunctionLushchenko)
// touchZoneFirst.addEventListener('touchend', touchENDfunctionLushchenko)
// touchZoneFirst.addEventListener('touchmove', touchMOVEfunctionLushchenko)

// function touchSTARTfunctionLushchenko(event) {
//   console.log(event)
//   console.log('touch')
//   document.querySelector('.textOutputZoneFirst__css-class p').textContent += event.touches.length
// }
// function touchENDfunctionLushchenko(event) {
//   document.querySelector('.textOutputZoneFirst__css-class p').textContent += ` end `
// }
// function touchMOVEfunctionLushchenko(event) {
//   console.log(event)
//   document.querySelector('.textOutputZoneFirst__css-class p').textContent += ` M `
// }


// const containerFirst = document.querySelector('.containerFirst')
// const qubes = document.querySelectorAll('.squareFirst')
// console.log(qubes) 

// for (let i=0; i < qubes; i++) {
//   qubes.addEventListener('touchstart', (event) => {
//   console.log(event)
//   setColor(qubes.currentTarget)
//   })
// }
