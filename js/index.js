const container = document.getElementById('container')
const SQUARES = 500
const extraSQUARES = 4
const colors = ['silver', 'Crimson', 'IndianRed', 'LightSalmon',
                'Salmon', 'DarkRed', 'DarkSalmon', 'Red',
                'Tomato', 'LimeGreen', 'FireBrick', 'PaleVioletRed',
                'Yellow', 'OrangeRed', 'DeepPink', 'Coral',
                'Orchid', 'SandyBrown', 'Moccasin', 'Gold',
                'Brown', 'LightSteelBlue', 'PeachPuff', 'DarkKhaki',
                'Gainsboro', 'MediumOrchid', 'LightCoral',
                'MediumTurquoise', 'YellowGreen', 'Lime',
                'DarkSeaGreen', 'MediumSeaGreen',
                'LightSeaGreen', 'MediumAquamarine',
              ]

for (let i=0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  
  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseout', () => {
    removeColor(square)
  })
  square.addEventListener('mousedown', () => {
    setColor(square)
  })
  square.addEventListener('mousemove', () => {
    removeColor(square)
  })
  square.addEventListener('mouseup', () => {
    setColor(square)
  })
  square.addEventListener('click', () => {
    removeColor(square)
  })

  for (let index=0; index < extraSQUARES; index++) {
    const extraSquare = document.createElement('div')
    extraSquare.classList.add('extraSquare')
    extraSquare.addEventListener('mouseover', () => {
      setColor(extraSquare)
    })
    extraSquare.addEventListener('mouseout', () => {
      removeColor(extraSquare)
    })
    square.appendChild(extraSquare)
  }
  container.appendChild(square)
}

function setColor(el) {
  const color = getRandomColor()
  el.style.background = color
  el.style.border = color
}

function removeColor(el) {
  el.style.background = 'transparent'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length - 7)]
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

