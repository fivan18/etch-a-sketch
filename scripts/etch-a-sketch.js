function searchSpecificRule(selector) {
    const rules = document.styleSheets[0].cssRules;
    for (rule in rules) {
        if (rules[rule].selectorText === selector) {
            return rules[rule].style;
        }
    }
    return null;
}

function fillContainer(rows, columns) {
    let divsString = "";
    for (let i = 0; i < (rows * columns); i++) {
        divsString += '<div class="child"></div>';
    }

    document.querySelector(".container").innerHTML = divsString;
}

function createGrid(rows, columns) {
    const ruleContainer = searchSpecificRule(".container");
    ruleContainer.display = "grid";
    ruleContainer.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    ruleContainer.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

function setSquareEventListener() {
    const squares = Array.from(document.querySelectorAll(".container > .child"));
    squares.forEach(square => {
        square.addEventListener("mouseover", function (event) {
            const styleChild = event.target.style;
            if (!(styleChild.backgroundColor === "black")) {
                styleChild.backgroundColor = "black";
            } else if (styleChild.opacity < 1) {
                styleChild.opacity = Number(styleChild.opacity) + 0.2;
            }
        });
    });
}

function setChildOpacity() {
    const childs = Array.from(document.querySelectorAll(".child"));
    if (
        Array.from(document.querySelector("#b-gradient > button").classList).includes("toggle-gradient")
    ) {
        childs.forEach(child => {
            child.style.opacity = 0.2;
        });
    } else {
        childs.forEach(child => {
            child.style.opacity = 1;
        });
    }
}

function reset(){
    const lengthSquare = Number(document.querySelector("#i-square > input").value);
    fillContainer(lengthSquare, lengthSquare);
    createGrid(lengthSquare, lengthSquare);
    setChildOpacity();
    setSquareEventListener();
}

reset();

setSquareEventListener();

document.querySelector("#b-reset > button").addEventListener("click", function(event){
    reset();
});

document.querySelector("#b-gradient > button").addEventListener("click", function(event){
    event.target.classList.toggle("toggle-gradient");
    setChildOpacity();
});








