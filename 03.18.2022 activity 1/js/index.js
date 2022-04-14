//+---------------------------------+//
//
// graphic and mouseIsPressed function
// inspired from this video:
// https://www.youtube.com/watch?v=TaluaAD9MKA
//
// main ideia inspired from this other video:
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
//
//
//+---------------------------------+//


let valInput = '';
let val1 = 50;
let val2 = 100;
let val3 = 200;
let resetValInput = valInput;
let resetVal1 = val1;
let resetVal2 = val2;
let resetVal3 = val3;

let slider1, slider2, slider3, btn, input;
let pos, textPos;
let size = [800, 400] // width | height;
let extraCanvas;

function setup() {
    createCanvas(size[0],size[1]);
    extraCanvas = createGraphics(size[0],size[1]);
    pos = [width/2, height/2];
    mouseX = pos[0]/2;
    mouseY = pos[1]/2;


    textAlign(CENTER);
    textSize(80);
    textStyle(BOLD);
    textFont('Helvetica');

    input = createInput(valInput);
    slider1 = createSlider(0, 255, val1);
    slider2 = createSlider(0, 255, val2);
    slider3 = createSlider(0, 255, val3);

    input.position('70', '100');
    input.style('width', '150px');
    slider1.position('70', '140');
    slider1.style('width', '150px');
    slider2.position('70', '180');
    slider2.style('width', '150px');
    slider3.position('70', '220');
    slider3.style('width', '150px');

    resetCanvas();

    btn = createButton('Reset');
    btn.mousePressed(resetCanvas);
    btn.style('width', '150px');
    btn.style('height', '40px');
    btn.position('70', '270');
}
function resetCanvas() {
    extraCanvas.clear();
    background(resetVal1, resetVal2, resetVal3)
    input.value(resetValInput);
    slider1.value(resetVal1);
    slider2.value(resetVal2);
    slider3.value(resetVal3);
}

function draw() {
    val1 = slider1.value();
    val2 = slider2.value();
    val3 = slider3.value();
    valInput =  input.value();

    background(val1, val2, val3);

    fill(val2, val3, val1);
    textPos = [mouseX/2/random(1,2)+size[0]/3, mouseY/2/random(1,2)+size[1]/3];
    text(valInput, textPos[0], textPos[1]);

    if (mouseIsPressed) {
        extraCanvas.fill(val3, val1, val2);
        extraCanvas.noStroke();
        extraCanvas.ellipse(mouseX, mouseY, 20, 20);
    }
    image(extraCanvas, 0, 0);
}

function keyPressed() {
    if (keyCode == ESCAPE) {
        slider1.value(150);
        slider2.value(200);
        slider3.value(0);
    }
}
