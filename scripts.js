class Color{
    constructor(){
        this.hex = ""
        this.locked = false
    } 
}



class Palette{
    constructor(){
        this.colors = [
            new Color(),
            new Color(),
            new Color(),
            new Color(),
            new Color()
        ]
        this.id = Date.now()
    }

    buildNewPalette(){
        for (var i = 0; i < 5; i++){
            if (!this.colors[i].locked){
                this.colors[i].hex = randomHexCode()
            }
        }
    }

    lockColor(id) { "lock-3"
        var element = document.querySelector(`#${id}`)
        var strInt = id.substr(id.length - 1, 1)
        var num = parseInt(strInt)
        
        if (this.colors[num].locked) {
            this.colors[num].locked = false;
            element.src = "./icons/black-unlock.png"
        } else {
            this.colors[num].locked = true;
            element.src = "./icons/black-lock.png"
        }
    }
}


//buttons
var newPalette = document.querySelector("#new")
var savePalette = document.querySelector("#save")
var viewSaved = document.querySelector("#saved")

//colors
var color1 = document.querySelector("#color-0")
var color2 = document.querySelector("#color-1")
var color3 = document.querySelector("#color-2")
var color4 = document.querySelector("#color-3")
var color5 = document.querySelector("#color-4")

//hex codes
var hex1 = document.querySelector("#hex-0")
var hex2 = document.querySelector("#hex-1")
var hex3 = document.querySelector("#hex-2")
var hex4 = document.querySelector("#hex-3")
var hex5 = document.querySelector("#hex-4")

//instances
var palette = new Palette()

var hexCharacters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


color1.addEventListener('click', checkLock)
color2.addEventListener('click', checkLock)
color3.addEventListener('click', checkLock)
color4.addEventListener('click', checkLock)
color5.addEventListener('click', checkLock)

newPalette.addEventListener('click', createNewPalette)




function getRandomNumber(){
    return Math.floor(Math.random() * hexCharacters.length)
}

function randomHexCode(){
    var currentHexCode = ""
    for (var i = 0; i < 6; i++){
        currentHexCode += hexCharacters[getRandomNumber()]
    }
    return `#${currentHexCode}`
}

function checkLock(event) {
    if (event.target.className === "lock") {
        palette.lockColor(event.target.id);
    }
}

function createNewPalette() {
    palette.buildNewPalette()
    updateColors()
}

function checkIfLocked(num) {
    if (palette.colors[num].locked) {
        return "./icons/black-lock.png"
    } else {
        return "./icons/black-unlock.png"
    }
}

function updateColors() {
    for (var i = 0; i < palette.colors.length; i++) {
        var hold = document.querySelector(`#color-${i}`)
        hold.style.background = palette.colors[i].hex
        hold.innerHTML = 
        ` <p id="hex-${i}">${palette.colors[i].hex}</p>
        <img class="lock" id="lock-${i}" src=${checkIfLocked(i)} alt="">`
    }
}

palette.buildNewPalette()
