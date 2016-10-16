"use strict";
var grid = document.getElementById('grid-container');
var colors = ["purple","blue","green","yellow","orange","red"];
var palette = document.getElementById('palette');
var currentColor;
createPixelGrid(30,60);
createColorWells(colors);
palette.addEventListener("click", function (event) {
  currentColor = event.target.style.backgroundColor;
  document.getElementById('current-color').style.backgroundColor = currentColor;
});
grid.addEventListener("mousedown", function (event) {
  event.target.style.backgroundColor = currentColor;
  grid.addEventListener("mouseover", setBackgroundColor);
});
grid.addEventListener("mouseup", function () {
  grid.removeEventListener("mouseover", setBackgroundColor);
});
// Create pixel grid
function createPixelGrid(rows,columns) {
  // create and append row containers to the grid
  for (var i = 0; i < rows; i++) {
    var newRow = document.createElement('div');
    newRow.className = "pixel-row";
    grid.appendChild(newRow);
    //populate rows with pixel-divs
    for (var col = 0; col < columns; col++) {
      var newPixel = document.createElement('div');
      newPixel.className = "pixel-div clearfix";
      newRow.appendChild(newPixel);
    }
  }
}
//populate color wells
function createColorWells(colors) {
  for (var i = 0; i < colors.length; i++) {
    var newColor = document.createElement('div');
    newColor.className = "color-well";
    newColor.style.backgroundColor = colors[i];
    palette.appendChild(newColor);
  }
}
function setBackgroundColor() {
  event.target.style.backgroundColor = currentColor;
}
