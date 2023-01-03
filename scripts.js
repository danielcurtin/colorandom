class Color{
    constructor(hex){
        this.hex = hex
        this.locked = false
    } 
}



class Palette{
    constructor(a, b, c, d, e){
        this.colors = [
            new Color(a),
            new Color(b),
            new Color(c),
            new Color(d),
            new Color(e)
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
}





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

//instances
var color = new Color()
var palette = new Palette()

var hexCharacters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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

palette.buildNewPalette()
console.log(palette)
