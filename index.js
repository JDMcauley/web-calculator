let calcDisplay = ""
let memDisplay = ""
let currentOperator = ''
let lastOperator = ''
let isChain = false
let calcualtedNum = 0
let newChain = false

function buttonClicked(value){
    if (newChain === true) {
        calcDisplay = value
        newChain = false
    } else {
        calcDisplay = calcDisplay.concat(value)
    }
    document.getElementById("calcDisplay").innerHTML = currentOperator.concat(calcDisplay)
}

function clearDisplay() {
    calcDisplay = ""
    memDisplay = ""
    currentOperator = ''
    lastOperator = ''
    calcualtedNum = 0
    isChain = false
    document.getElementById("calcDisplay").innerHTML = ""
    document.getElementById("memDisplay").innerHTML = ""
}

function calculate() {
    const num1 = Number(memDisplay)
    const num2 = Number(calcDisplay)
    switch (lastOperator) {
        case '+':
            calcualtedNum = num1 + num2
            break
        case '-':
            calcualtedNum = num1 - num2
            break
        case '*':
            calcualtedNum = num1 * num2
            break
        case '/':
            calcualtedNum = num1 / num2
            break
    }
}

function calculateNumber(operator) { 
    if (operator === '=') {
        if (memDisplay !== "" && calcDisplay !== ""){
            calculate()
            document.getElementById("calcDisplay").innerHTML = "= ".concat(calcualtedNum)
            document.getElementById("memDisplay").innerHTML = memDisplay.concat(lastOperator.concat(calcDisplay))
            calcDisplay = String(calcualtedNum)
            memDisplay = ""
            currentOperator = ""
            lastOperator = ""
            isChain = false
            newChain = true
        }
        return
    }
    if (isChain === true && calcDisplay !== "") {
        calculate()
        memDisplay = String(calcualtedNum)
    } else if (isChain === false && calcDisplay !== ""){
        memDisplay = calcDisplay
    }
    calcDisplay = ""
    lastOperator = operator
    currentOperator = operator
    isChain = true
    document.getElementById("memDisplay").innerHTML = memDisplay
    document.getElementById("calcDisplay").innerHTML = currentOperator
}