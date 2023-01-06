class Color {
    constructor(hex) { 
        this.hex = hex || ""
        this.locked = false
    } 
}

class Palette {
    constructor(hex1, hex2, hex3, hex4, hex5, id) {
        this.colors = [
            new Color(hex1),
            new Color(hex2),
            new Color(hex3),
            new Color(hex4),
            new Color(hex5)
        ]

        this.id = id || Date.now()
    }

    buildNewPalette() {
        for (var i = 0; i < 5; i++) {
            if (!this.colors[i].locked) {
                this.colors[i].hex = randomHexCode()
            }
        }

        this.id = Date.now()
    }

    lockColor(id) { 
        var element = document.querySelector(`#${id}`)
        var strInt = id.substr(id.length - 1, 1)
        var num = parseInt(strInt)

        if (this.colors[num].locked) {
            this.colors[num].locked = false;
            element.src = `./icons/${checkBrightness(this.colors[num].hex)}-unlock.png`
        } else {
            this.colors[num].locked = true;
            element.src = `./icons/${checkBrightness(this.colors[num].hex)}-lock.png`
        }

        updateFontColor(num)
    }
}


var logoText = document.querySelector('#logoText');
var newPaletteBtn = document.querySelector("#new")
var savePaletteBtn = document.querySelector("#save")
var viewSavedBtn = document.querySelector("#saved")
var closeSavedBtn = document.querySelector('#closeSaved')
var toolTipText = document.querySelector(".tool-tip")
var hexText = document.querySelectorAll(".color")

var color1 = document.querySelector("#color0")
var color2 = document.querySelector("#color1")
var color3 = document.querySelector("#color2")
var color4 = document.querySelector("#color3")
var color5 = document.querySelector("#color4")

var savedMenu = document.querySelector('#savedPalettes')
var displayBoxes = document.querySelector('.display-boxes')

var hexCharacters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var palette = new Palette()
var savedPalettes = [];


window.addEventListener('load', function() {
    createNewPalette();
    randomizeColors();
})

logoText.addEventListener('mouseover', randomizeColors);

color1.addEventListener('click', checkIfLock)
color2.addEventListener('click', checkIfLock)
color3.addEventListener('click', checkIfLock)
color4.addEventListener('click', checkIfLock)
color5.addEventListener('click', checkIfLock)

newPaletteBtn.addEventListener('click', createNewPalette)
viewSavedBtn.addEventListener('click', openNavBar)
savePaletteBtn.addEventListener('click', checkForDuplicate)
closeSavedBtn.addEventListener('click', closeNavBar)
savedMenu.addEventListener('click', deleteSavedPalette)

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        toolTipText.classList.remove("tool-tip")
        createNewPalette()
    }
})

function getRandomNumber() {
    return Math.floor(Math.random() * hexCharacters.length)
}

function randomHexCode() {
    var currentHexCode = ""

    for (var i = 0; i < 6; i++) {
        currentHexCode += hexCharacters[getRandomNumber()]
    }

    return `#${currentHexCode}`
}

function randomizeColors() {
    for (var i = 0; i < 10; i++) {
      var currentLetter = document.querySelector(`[data-index="${i}"]`);
      currentLetter.style.backgroundColor = randomHexCode();
    };
};

function checkIfLock(event) {
    if (event.target.className === "lock") {
        palette.lockColor(event.target.id);
    }
}

function toggleLock(num) {
    if (palette.colors[num].locked) {
        return `./icons/${checkBrightness(palette.colors[num].hex)}-lock.png`
    } else {
        return `./icons/${checkBrightness(palette.colors[num].hex)}-unlock.png`
    }
}

function createNewPalette() {
    palette.buildNewPalette()
    updateColors()
}

function updateColors() {
    for (var i = 0; i < palette.colors.length; i++) {
        var currentColor = document.querySelector(`#color${i}`)

        currentColor.style.background = palette.colors[i].hex
        currentColor.innerHTML = 
        `<p>${palette.colors[i].hex}</p>
        <img class="lock" id="lock${i}" src=${toggleLock(i)} alt="outlined lock icon">`

        updateFontColor(i)
    }
}

function checkForDuplicate() {
    for (var i = 0; i < savedPalettes.length; i++) {
        if (palette.id === savedPalettes[i].id) {
            return
        }      
    }

    savePalette()
    createNewPalette()
    displaySavedPalettes()
}

function savePalette() {
    var currentPalette = new Palette(palette.colors[0].hex, palette.colors[1].hex, palette.colors[2].hex, palette.colors[3].hex, palette.colors[4].hex, palette.id)
    
    savedPalettes.push(currentPalette)
}

function displaySavedPalettes() {
    displayBoxes.innerHTML = ``

    for(var i = 0; i < savedPalettes.length; i++) {
        displayBoxes.innerHTML += 
        `
            <div class="box" style="background: ${savedPalettes[i].colors[0].hex}"></div>
            <div class="box" style="background: ${savedPalettes[i].colors[1].hex}"></div>
            <div class="box" style="background: ${savedPalettes[i].colors[2].hex}"></div>
            <div class="box" style="background: ${savedPalettes[i].colors[3].hex}"></div>
            <div class="box" style="background: ${savedPalettes[i].colors[4].hex}"></div>
            <img class="delete-btn" id="d${savedPalettes[i].id}" src="./icons/trashcan.png" style="width: 2.3vw; height: 2.3vw" alt="trashcan icon">
        `
    }
} 

function openNavBar() {
    savedMenu.classList.add('navOpen')
    savedMenu.classList.remove('navClose')
    displaySavedPalettes()
}

function closeNavBar() {
    savedMenu.classList.add('navClose')
    savedMenu.classList.remove('navOpen')   
}

function deleteSavedPalette(event) {
    var deletionTarget = event.target.id

    deletionTarget = deletionTarget.slice(1)
    deletionTarget = parseInt(deletionTarget)

    for (var i = 0; i < savedPalettes.length; i++) {
        if (savedPalettes[i].id === deletionTarget) {
            savedPalettes.splice(i, 1)
        }
    }

    displaySavedPalettes()
}

function updateFontColor(num) {
    hexText[num].style.color = checkBrightness(palette.colors[num].hex)
}

function checkBrightness(hex) {
    var newHex = +("0x" + hex.slice(1).replace(hex.length < 5 && /./g, '$&$&'));

    r = newHex >> 16;
    g = newHex >> 8 & 255;
    b = newHex & 255;

  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );
 
  if (hsp>127.5) {
    return 'black';
  } else {
    return 'white';
  }
}