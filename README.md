<h1 align="center">Colorandom</h1>

### Abstract
- This color palette generator lets a user get a random palette of 5 colors, with the ability to generate new colors. Each color has it's hexadecimal code rendered on top of it, and the user can choose any colors that they'd like to keep through a lock/unlock system. They can also save any color palettes to a sidebar that they can view/hide at will.
###### &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Additionally, try hitting spacebar to generate a new palette instead of the button, and hover over the logo for a fun effect!

### Installation Instructions
#### Colorandom is accessible through [this](ea-ordonez.github.io/group-project1/) website, or locally through the following instructions
- Clone down this repo, and navigate into the directory for it.
- Run Open index.html in the command prompt, and the application should open in your default web browser.

### Preview
![Screen Recording 2023-01-09 at 2 21 02 PM](https://user-images.githubusercontent.com/114776048/211411035-57340424-a2a3-4a87-a190-95990d9303df.gif)

### Context
- Currently we're all 4 weeks in to the mod1 Front End Engineering Program.
- This project took us roughly 20-25 hours.

### Contributors
- [Kelli Watkins](https://github.com/klwats)
- [Bea Ordonez](https://github.com/bea-ordonez)
- [Trevor Fitzgerald](https://github.com/trevorfitz0)
- [Daniel Curtin](https://github.com/danielcurtin)

### Learning Goals
- Write semantic HTML and efficient CSS to form a usable UI
- Write clean, DRY JavaScript and leverage classes, creating and using an effective data model
- Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
- Refine your collaboration skills

### Wins + Challenges
##### Wins
- We feel that we had really good collaboration and group dynamics, especially for this being our first group project!
- We never really hit a wall that some relatively quick research or team rubberducking/troubleshooting couldn't overcome.

##### Challenges
- We wanted a way to tell the difference in the brightness level of each color so we could properly adjust the color of the hexcode text and lock icons for improved readability, but we weren't sure where to start with tackling that.
- Trevor found an algorithm that could be used for that, his explanation of that follows:<br>
```
This last function “checkBrightness()” is a script to tell if a particular color is light or dark so we can alter the 
lock icon and text over the color to either white or black (white for dark colors and vice versa). The first 4 lines 
of code are taking our imputed hex code for our color then converting the hexadecimal into 3 separate RGB variables. 
After that we are taking our 3 variables and converting them into the HSP color model. The HSP model is based on the 
brightness of a color and is our main variable helping us determine what color is appearing and if it is a bright or 
non bright color. We then use the middle HSP value (127.5) and  depending on which side of the spectrum the color is 
on we return black or white to interpolate into our file selecting function.
```
