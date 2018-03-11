var designActive = false;
var colNumb = 1 ;
var rowNumb = 1 ;
var container = null;

function startUp() {
    createGrid();
}

function createGrid() {
    if (container != null) {
        document.body.removeChild(container);
    }
    container = document.createElement('div');
    let colVal = ' 100px';
    let rowVal = ' 100px';
    container.style.cssText = 'display:grid;grid-template-columns:'+colVal.repeat(colNumb)+';grid-template-rows:'+rowVal.repeat(rowNumb)+';';
    document.body.appendChild(container);
    let numOfInputs = colNumb*rowNumb;
    insertInputs(container, numOfInputs);
}

function insertInputs(container, numOfInputs) {
    for(let i = 0; i < numOfInputs; i++) {
        let newInput = document.createElement('input');
        newInput.id = 'input'+i;
        newInput.className = 'light';
        newInput.addEventListener('click', handleClick);
        container.appendChild(newInput);
    }
}

function handleClick() {
    if (designActive) {
        designMode(this);
    }
}

function designMode(clicked) {
    if (clicked.className == 'light') {
        clicked.className = 'dark';
    }
    else {
        clicked.className = 'light';
    }
}

function handleDesign() {
    designActive = !designActive;
}

function updateGrid() {
    let col = document.getElementById('columns').value;
    let row = document.getElementById('rows').value;
    colNumb = col;
    rowNumb = row;
    createGrid();
}