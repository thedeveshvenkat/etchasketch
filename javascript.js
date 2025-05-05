const container = document.querySelector("#container");
const button = document.querySelector("#reset");
const op = document.querySelector("#opaque");
const sc = document.querySelector("#sc");
let opacityb = false;
let sColor = true;
let color = "blue";

let newOpacity = 0.5;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hover(e) {
    if (opacityb) {
        if (e.target.style.background === "white") {
            e.target.style.opacity = "0.55";
        }
        if (e.target.id !== "container" && e.target.style.background !== "white") {  
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.05;
        }
    } else {
        //let currentOpacity = parseFloat(e.target.style.opacity);
        e.target.style.opacity = "1";
    }

    if (sColor) {
        e.target.style.background = color;
    } else {
        e.target.style.background = getRandomColor(); 
    }
}

container.addEventListener("mouseover", hover);


function startSketch(number) {
    for (let i = 0; i < number*number; i++) {
        const square = document.createElement("div");
        square.style.width = (960/number) + "px";
        square.style.height = (960/number) + "px";
        square.style.background = "white";
        square.className = "square";
        container.append(square);
    }
}

button.addEventListener("click", () => {
    let answer = prompt("Enter your desired number of squares per side");
    container.innerHTML = '';
    startSketch(answer);
});

op.addEventListener("click", () => {
    opacityb = !opacityb;
});

sc.addEventListener("click", () => {
    sColor = !sColor;
    color = getRandomColor();
});

