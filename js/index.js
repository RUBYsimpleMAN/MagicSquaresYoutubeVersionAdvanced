const touchZoneFirst = document.querySelector('.touchZoneFirst__css-class');
touchZoneFirst.addEventListener('touchstart', touchSTARTfunctionLushchenko)
touchZoneFirst.addEventListener('touchend', touchENDfunctionLushchenko)
touchZoneFirst.addEventListener('touchmove', touchMOVEfunctionLushchenko)

function touchSTARTfunctionLushchenko(event) {
  console.log(event)
  console.log('touch')
  document.querySelector('.textOutputZoneFirst__css-class p').textContent += event.touches.length
}
function touchENDfunctionLushchenko(event) {
  document.querySelector('.textOutputZoneFirst__css-class p').textContent += ` end `
}
function touchMOVEfunctionLushchenko(event) {
  document.querySelector('.textOutputZoneFirst__css-class p').textContent += ` M `
}


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

const containerFirst = document.querySelector('.containerFirst')
const qubes = document.querySelector('.squareFirst')
console.log(qubes)

for (let i=0; i < SQUARES; i++) {

  qubes.addEventListener('touchstart', () => {
    setColor(qubes.currentTarget)
  })
}

        // for (let i=0; i < SQUARES; i++) {
          // const square = document.createElement('div')
          // square.classList.add('square')
  
  // square.addEventListener('mouseover', () => {
  //   setColor(square)
  //   removeColor(square)
  // })
  // square.addEventListener('mouseout', () => {
  //   setColor(square)
  //   removeColor(square)
  // })
  // square.addEventListener('mousedown', () => {
  //   setColor(square)
  //   removeColor(square)
  // })
  // square.addEventListener('mousemove', () => {
  //   setColor(square)
  //   removeColor(square)
  // })
  // square.addEventListener('mouseup', () => {
  //   setColor(square)
  //   removeColor(square)
  // })
  // square.addEventListener('click', () => {
  //   setColor(square)
  //   removeColor(square)
  // })

          // square.addEventListener('touchstart', () => {
            // setColor(square)
          // })
  // square.addEventListener('touchmove', (event) => {
  //   event.currentTarget.setColor(square)
  // })
  // square.addEventListener('touchend', (event) => {
  //   event.currentTarget.removeColor(square)
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
  //   square.appendChild(extraSquare)
  // }
          // container.appendChild(square)
        // }

function setColor(event) {
  // event.target.innerHTML = 0
  // container.innerHTML = 0
  console.log("touch")
  console.log(event)
  console.log(event.target)
  console.log(event.currentTarget)
  // const color = getRandomColor()
  // el.style.background = color
  // el.style.border = color
}

// function setColor(el) {
  // const color = getRandomColor()
  // el.style.background = color
  // el.style.border = color
// }

// function removeColor(el) {
//   el.style.background = 'transparent'
// }

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length - 7)]
// }

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
