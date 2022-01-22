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
    setColorForSquare(square)
  })
  square.addEventListener('mouseout', () => {
    removeColorFromSquare(square)
  })

  for (let index=0; index < extraSQUARES; index++) {
    const extraSquare = document.createElement('div')
    extraSquare.classList.add('extraSquare')
    extraSquare.addEventListener('mouseover', () => {
      setColorForSquare(extraSquare)
    })
    extraSquare.addEventListener('mouseout', () => {
      removeColorFromSquare(extraSquare)
    })
    square.appendChild(extraSquare)
  }

  container.appendChild(square)
}

function setColorForSquare(el) {
  const color = getRandomColorForSquare()
  el.style.background = color
  el.style.border = color
}

function removeColorFromSquare(el) {
  el.style.background = 'transparent'
}

function getRandomColorForSquare() {
  return colors[Math.floor(Math.random() * colors.length - 7)]
}

function setColorForExtraSquare(el) {
  const color = getRandomColorForSquare()
  el.style.background = color
  el.style.border = color
}

function removeColorFromExtraSquare(el) {
  el.style.background = 'transparent'
}

function getRandomColorForExtraSquare() {
  return colors[Math.floor(Math.random() * colors.length - 11)]
}

