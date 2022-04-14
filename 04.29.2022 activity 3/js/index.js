//+---------------------------------+//
//
// main ideia inspired from this video:
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
//
//
//+---------------------------------+//


let valInput = 'Example';
let resetValInput = valInput;
let grocery = [];
let posLast = {x:40, y:0};

let val1 = 150;
let val2 = 20;
let val3 = 250;

let btn, input;
let size = [800, 400] // width | height;

function setup() {
    createCanvas(size[0],size[1]);

    textAlign(LEFT);
    textStyle(BOLD);
    textFont('Helvetica');

    textSize(14);
    fill(val2, val3, val1)

    input = createInput(valInput);
    input.position('70', '200');
    input.style('width', '150px');

    btnAdd = createButton('Add');
    btnAdd.mousePressed(groceryAdd)
    btnAdd.style('width', '70px');
    btnAdd.style('height', '20px');
    btnAdd.position('150', '240');

    resetCanvas();

    btn = createButton('Reset');
    btn.mousePressed(resetCanvas);
    btn.style('width', '70px');
    btn.style('height', '20px');
    btn.position('70', '240');
}
function resetCanvas() {
    background(val1, val2, val3)
    input.value(resetValInput)
    posLast = {x:40, y:0};
    grocery = [];
}

function updateList(array) {
    background(val1, val2, val3)
    posLast = {x:40, y:0};
    for (let index = 0; index < array.length; index++) {
        if (posLast.y == 320) {
            posLast.y = 0;
            posLast.x += 100;
        }
        posLast.y += 40
        text(array[index], posLast.x, posLast.y)
    }
}
function groceryAdd() {
    grocery.push(input.value());
    console.log(grocery);

    updateList(grocery);
}
