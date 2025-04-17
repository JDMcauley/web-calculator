let displayString = ""

function buttonClicked(num){
    displayString = displayString.concat(num)
    console.log(displayString)
    document.getElementById("calcDisplay").innerHTML = displayString
}

function clearDisplay(){
    document.getElementById("calcDisplay").innerHTML = " "
    displayString = ""
}