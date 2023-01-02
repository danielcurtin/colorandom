
//buttons
var newPalette = document.querySelector("#new")
var savePalette = document.querySelector("#save")
var viewSaved = document.querySelector("#saved")

//colors
var color1 = document.querySelector("#color-1")
var color2 = document.querySelector("#color-2")
var color3 = document.querySelector("#color-3")
var color4 = document.querySelector("#color-4")
var color5 = document.querySelector("#color-5")

//hex codes
var hex1 = document.querySelector("#hex-1")
var hex2 = document.querySelector("#hex-2")
var hex3 = document.querySelector("#hex-3")
var hex4 = document.querySelector("#hex-4")
var hex5 = document.querySelector("#hex-5")

var hexCharacters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

class Color{
    constructor(){
        this.locked = false
    }

    randomHexCode(){
        var currentHexCode = ""
        var character = ""
        for (var i = 0; i < 6; i++){
            character = hexCharacters[getRandomNumber()]
            currentHexCode += character
        }
        return `#${currentHexCode}`
    }
}







function getRandomNumber(){
    return Math.floor(Math.random() * hexCharacters.length)
}

