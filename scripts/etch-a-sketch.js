function searchSpecificRule(selector){
    const rules = document.styleSheets[0].cssRules;
    for(rule in rules){
        if(rules[rule].selectorText === selector){
            return rules[rule].style;
        }
    }
    return null;
}

function fillContainer(rows, columns){
    let divsString = "";
    for(let i = 0; i < (rows * columns); i++){
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




fillContainer(16, 16);
createGrid(16, 16);
