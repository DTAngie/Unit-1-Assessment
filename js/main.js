/*----- app's state (variables) -----*/
let totalValue, isNegative;

/*----- cached element references -----*/
const totalEl = document.getElementById('total');
const plusButtonEl = document.getElementById('plus');
const minusButtonEl = document.getElementById('minus');
const inputEl = document.getElementById('incrementor');

/*----- event listeners -----*/
plusButtonEl.addEventListener('click', increment);
minusButtonEl.addEventListener('click', decrement);
inputEl.addEventListener('keydown', setInputValue);

/*----- functions -----*/
init();

function init() {
    totalValue = 0;
    inputEl.value = 1;
    isNegative = false;

    render();
}

function render() {
    totalEl.textContent = totalValue;
    if(isNegative){
        totalEl.className = 'negative';
    } else {
        totalEl.className = '';
    }
}

function increment(){
    if(isNaN(totalValue)){
        totalValue = 0;
    }
    totalValue = parseInt(inputEl.value) + totalValue;
    checkForNegative(totalValue);
    console.log(inputEl.value);
    render();
}

function decrement(){
    if(isNaN(totalValue)){
        totalValue = 0;
    }
    totalValue = totalValue - parseInt(inputEl.value);
    checkForNegative(totalValue);
    
    render();
}

function setInputValue(e){
    inputValue = e.target.value;
}

function checkForNegative(value){
    if(value < 0){
        isNegative = true;
    } else {
        isNegative = false;
    }
}