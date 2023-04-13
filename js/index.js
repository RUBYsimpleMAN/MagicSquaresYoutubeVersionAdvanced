const container = document.getElementById('container')
console.log(container)
const SQUARES = 1600
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
  // console.log('squareCreation', squareCreation)
  squareCreation.classList.add('square')
  // console.log('StyledSquareCreation', squareCreation)
  container.appendChild(squareCreation)
}
// const squares = document.getElementsByClassName('square')
// console.log('squares', squares)


// document.elementFromPoint(event.clientX, event.clientY)
// var myLocation = event.originalEvent.changedTouches[0];
// var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
// var myLocation = event.touches[0];
// var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);


( function loop() {
  setTimeout(() => {

  container.addEventListener('touchstart', (event) => {
    // console.log('event', event)
  //const squares = document.getElementsByClassName('square')
    // const squares = document.getElementsByClassName('square')
    // console.log('squares', squares)
        event.target.style.background = setColor(event.target)
    // console.log('event.target', event.target)
    // console.log('eventCurTarget', event.currentTarget)
    
    // for (let y = 0; y < squares.length; y++) {
      // console.log('squares.length', squares.length)
      // const square = squares[y]
  //event.target.style.background = setColor(event.target)
      // console.log('square-element', square)
      // square = () => {
        // setColor(square)
        // setColor(square)
      // }
    // }
  })
  
  container.addEventListener('touchend', (event) => {
    // console.log('touchend-event', event)
    // console.log('touchend-event.target', event.target)
    // event.target.style.background = removeColor(event.target)
    event.target.style.background = 'transparent'
  })
  
  container.addEventListener('touchcancel', (event) => {

    evt.preventDefault();
    console.log('touchcancel', event.changedTouches);
    const touches = event.changedTouches;
    
    for (let i = 0; i < touches.length; i++) {
      let idx = ongoingTouchIndexById(touches[i].identifier);
      ongoingTouches.splice(idx, 1); // remove it; we're done
    }

    console.log('touchcancel-event', event)
    console.log('touchcancel-event.target', event.target)
  })
  
  loop();
  }, 100);
})();


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

// 5.8 The touchcancel event

// A user agent must dispatch this event type to indicate when a touch point has been disrupted
// in an implementation-specific manner, such as a synchronous event or action originating
// from the UA canceling the touch, or the touch point leaving the document window into a non-document area
// which is capable of handling user interactions (e.g. the UA's native user interface,
// or an area of the document which is managed by a plug-in). A user agent may also dispatch this event type
// when the user places more touch points on the touch surface than the device or implementation is configured to store,
// in which case the earliest Touch object in the TouchList should be removed.

// The target of this event must be the same Element on which the touch point
// started when it was first placed on the surface, even if the touch point
// has since moved outside the interactive area of the target element.

// The touch point or points that were removed must be included in the
// changedTouches attribute of the TouchEvent, and must not be included
// in the touches and targetTouches attributes.


// 6. Retargeting

// The following section describes retargeting steps, defined in [WHATWG-DOM].

// Touch object has an associated unadjustedTarget (null or EventTarget). Unless stated otherwise it is null.

// TouchEvent's retargeting steps, given a touchEvent, must run these steps:

//     For each Touch touch in touchEvent's touches, targetTouches, and changedTouches members:
//         Set touch's unadjustedTarget to touch's target if touch's unadjustedTarget is null.
//         Set touch's target to the result of invoking retargeting touch's unadjustedTarget against touchEvent's target.



// function handleCancel(evt) {
//   evt.preventDefault();
//   log("touchcancel.");
//   const touches = evt.changedTouches;

//   for (let i = 0; i < touches.length; i++) {
//     let idx = ongoingTouchIndexById(touches[i].identifier);
//     ongoingTouches.splice(idx, 1); // remove it; we're done
//   }
// }


// container.addEventListener('touchmove', (event) => {
//   if (event.target.className === 'square') {
//     setColor(event.target)
//   }
// })


// for (let s = 0; s < squares.length; s++) {
  // const square = document.querySelector('.square')
  // const square = squares[s]
  
  // console.log('square-element', square)

  // squares[s].addEventListener('click', () => {
  //   setColor(square)
  // })

  // square.addEventListener('touchstart', () => {
  //   setColor(square)
  // })
          // squares.addEventListener('touchstart', (event) => {
          //   if (event.target.className === 'square') {
          //     setColor(square)
          //   }
          // })
          // square.addEventListener('touchstart', (event) => {
          //   if (event.target.className === 'square') {
          //     setColor(square)
          //   }
          // })
//   square.addEventListener('touchmove', () => {
//     setColor(square)
//   })
//   square.addEventListener('touchend', () => {
//     removeColor(square)
//   })
// }

// document.getElementById('buttons').addEventListener('click', event => {
//   if (event.target.className === 'buttonClass') {
//     console.log('Click!');
//   }
// });


    // event.target
    // <div class="square" style="background: limegreen    none repeat scroll 0% 0%;">    index.js:32:11
    // eventCurTarget 
    // <section id="container" class="container">    index.js:33:11
    // event.target 
    // <div class="square" style="background: brown        none repeat scroll 0% 0%;">    index.js:32:11
    // eventCurTarget 
    // <section id="container" class="container">    index.js:33:11
    // event.target 
    // <div class="square" style="background: mediumorchid none repeat scroll 0% 0%;">    index.js:32:11
    // eventCurTarget 
    // <section id="container" class="container">    index.js:33:11


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
