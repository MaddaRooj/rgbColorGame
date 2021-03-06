// Too many vars...
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
    // removes hard mode
    hardBtn.classList.remove('selected');
    // selects easy mode
    easyBtn.classList.add('selected');
    // changes number of choices to three
    numSquares = 3;
    // generates three random colors
    colors = generateRandomColors(numSquares);
    // selects correct color choice
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function(){
    // removes easy mode
    easyBtn.classList.remove('selected');
    // selects hard mode
    hardBtn.classList.add('selected');
    // changes number of choices to six
    numSquares = 6;
    // generates random colors on squares
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
});

resetButton.addEventListener('click', function(){
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new random color
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = 'New Colors';
    messageDisplay.textContent = '';
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // resets the color of the h1 background
    h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener('click', function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color of clickedColor to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';        
        }
    })
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    // return in rgb format
    return "rgb(" + r + ", " + g + ", " + b + ")";
}