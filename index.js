displayString = ""
currentOperator = ""
lastOperator = ""
currentNum = ""
lastNum = ""
calculatedNum = ""

function buttonClicked(num){
    currentNum = currentNum + num
    displayString = displayString.concat(num)
    document.getElementById("calcDisplay").innerHTML = currentOperator.concat(displayString)
}

function clearDisplay(){
    document.getElementById("calcDisplay").innerHTML = " "
    displayString = ""
    document.getElementById("memDisplay").innerHTML = " "
    memString = ""
    currentOperator = ""
    lastOperator = ""
    currentNum = ""
    lastNum = ""
}

function addPressed(){
    lastNum = currentNum
    document.getElementById("memDisplay").innerHTML = lastNum
    document.getElementById("calcDisplay").innerHTML = "+ "
    displayString = ""
    currentNum = ""
    lastOperator = currentOperator
    currentOperator = "+"
}


function minusPressed(){
    lastNum = currentNum
    document.getElementById("memDisplay").innerHTML = lastNum
    document.getElementById("calcDisplay").innerHTML = "- "
    displayString = ""
    currentNum = ""
    lastOperator = currentOperator
    currentOperator = "-"
}


function multiplyPressed(){
    lastNum = currentNum
    document.getElementById("memDisplay").innerHTML = lastNum
    document.getElementById("calcDisplay").innerHTML = "* "
    displayString = ""
    currentNum = ""
    lastOperator = currentOperator
    currentOperator = "*"
}


function dividePressed(){
    lastNum = currentNum
    document.getElementById("memDisplay").innerHTML = lastNum
    document.getElementById("calcDisplay").innerHTML = "/ "
    displayString = ""
    currentNum = ""
    lastOperator = currentOperator
    currentOperator = "/"
}

function equalsPressed(){
    if (lastNum !== ""){
        switch(currentOperator){
            case "+":
                document.getElementById("memDisplay").innerHTML = currentNum.concat(" + ".concat(lastNum))
                currentNum = Number(currentNum) + Number(lastNum)
                document.getElementById("calcDisplay").innerHTML = "= ".concat(currentNum)
                break;
            case "-":
                document.getElementById("memDisplay").innerHTML = currentNum.concat(" - ".concat(lastNum))
                currentNum = Number(lastNum) - Number(currentNum)
                document.getElementById("calcDisplay").innerHTML = "= ".concat(currentNum)
                break;
            case "*":
                document.getElementById("memDisplay").innerHTML = currentNum.concat(" * ".concat(lastNum))
                currentNum = Number(lastNum) * Number(currentNum)
                document.getElementById("calcDisplay").innerHTML = "= ".concat(currentNum)
                break;
            case "/":
                document.getElementById("memDisplay").innerHTML = currentNum.concat(" / ".concat(lastNum))
                currentNum = Number(lastNum) / Number(currentNum)
                document.getElementById("calcDisplay").innerHTML = "= ".concat(currentNum)
                break;
        }
    }
}
