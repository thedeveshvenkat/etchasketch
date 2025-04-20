const container = document.querySelector("#container");
const button = document.querySelector("#reset");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hover(e) {
    if (e.target.style.background === "white") {
        e.target.style.opacity = "0.55";
    }
    if (e.target.id !== "container" && e.target.style.background !== "white") {  
        let newOpacity = parseFloat(e.target.style.opacity) + 0.05;
        e.target.style.opacity = newOpacity;
    }
    e.target.style.background = getRandomColor(); 
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

