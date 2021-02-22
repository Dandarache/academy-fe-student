let bulbService = (function () {
  const bulbStates = []
  let nrOfBulbs = 0

  let buttons = {}
  let bulbs = {}

  function init (id) {
    const heading = document.createElement('div')
    heading.style.color = '#fff'
    heading.innerText = 'Number of bulbs'

    const input = document.createElement('input')
    input.onkeyup = () => {
      numberOfBulbChanged(input.value)
    }

    buttons = document.createElement('div')
    bulbs = document.createElement('div')

    const main = document.getElementById(id)
    main.appendChild(heading)
    main.appendChild(input)
    main.appendChild(buttons)
    main.appendChild(bulbs)

    redraw()
  }

  function isPositiveWholeNumber (x) {
    return x == parseInt(x) && parseInt(x) >= 0
  }

  function numberOfBulbChanged (enteredtext) {
    if (!isPositiveWholeNumber(enteredtext)) return

    const newNumberOfBulbs = parseInt(enteredtext)

    nrOfBulbs = newNumberOfBulbs

    if (newNumberOfBulbs > bulbStates.length) {
      const bulbsToAdd = newNumberOfBulbs - bulbStates.length
      for (let i = 0; i < bulbsToAdd; i++) bulbStates.push(false)
    }

    redraw()
  }

  function eraseAllChildren (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  function createButton (index) {
    const button = document.createElement('button')
    button.className = 'button-smaller'
    button.onclick = () => {
      toggleBulb(index)
    }
    button.innerText = `Toggle bulb ${index + 1}`
    return button
  }

  function createImage (index) {
    const image = document.createElement('img')
    image.className = 'bulb bulb-smaller'

    image.onclick = () => {
      toggleBulb(index)
    }

    return image
  }

  function updateBulbsAndButtons () {
    eraseAllChildren(buttons)
    eraseAllChildren(bulbs)

    for (let index = 0; index < nrOfBulbs; index++) {
      buttons.appendChild(createButton(index))
      bulbs.appendChild(createImage(index))
    }
  }

  function setOnOrOffForIndex (index) {
    const bulbOnImage = 'img/bulb-on.jpg'
    const bulbOffImage = 'img/bulb-off.jpg'
    const bulbImage = bulbStates[index] ? bulbOnImage : bulbOffImage
    bulbs.childNodes[index].src = bulbImage
  }

  function setOnOrOff () {
    for (let index = 0; index < nrOfBulbs; index++) {
      setOnOrOffForIndex(index)
    }
  }

  function toggleBulb (index) {
    bulbStates[index] = !bulbStates[index]
    setOnOrOff()
  }

  function redraw () {
    updateBulbsAndButtons()
    setOnOrOff()
  }

  return {
    init: init
  }
})()
