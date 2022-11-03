const operation = document.querySelectorAll(".operation");
const addOp = document.querySelector(".add");
const subtractOp = document.querySelector(".subtract");
const multiplyOp = document.querySelector(".multiply");
const divideOp = document.querySelector(".divide");
const equalsOp = document.querySelector(".equals");

function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function operate(n1, n2, operator){
    if(operator === "+"){
        return add(n1, n2);
    } else if(operator === "-"){
        return subtract(n1, n2);
    } else if(operator === "*"){
        return multiply(n1, n2);
    } else if(operator === "/"){
        return divide(n1, n2);
    }
}

const number = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const displayText = document.querySelector("h1");
let inString = '';
let usedOperation;
let n1;
let n2;


number.forEach(function(number){
    number.addEventListener("click", function(e){
        let num = e.target.id;
        // console.log(num);

        inString = inString.concat(num);
        displayText.innerHTML = `${inString}`;
    });
});


const clear = document.querySelector(".clear");

function clearDisplay() {
    inString = '';
    displayText.innerHTML = '';
}

clear.addEventListener("click", function(e){
    clearDisplay();
});

function operate(num1, num2, func){
    return func(num1, num2);
}

operation.forEach(function(op) {
    op.addEventListener("click", function(e){
        n1 = parseFloat(inString, 10);
        clearDisplay();
    });
});

addOp.addEventListener("click",function(e){
    usedOperation = function(a,b){return add(a,b)};
});

subtractOp.addEventListener("click",function(e){
    usedOperation = function(a,b){return subtract(a,b)};
});

multiplyOp.addEventListener("click",function(e){
    usedOperation = function(a,b){return multiply(a,b)};
});

let divCheck = false;

divideOp.addEventListener("click",function(e){
    usedOperation = function(a,b){return divide(a,b)};
    divCheck = true;
});

equalsOp.addEventListener("click",function(e){
    n2 = parseFloat(inString, 10);
    console.log(n2);
    clearDisplay();
    let returnValue = (usedOperation(n1, n2).toFixed(15));
    inString = returnValue;

    if(divCheck === true && n2 === 0){
        inString = 'You can\'t do that';
        n1 = '';
        n2 = '';
    }

    inString = inString.substring(0, 8);
    displayText.innerHTML = `${inString}`;
});