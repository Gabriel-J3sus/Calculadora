var calcNumbers = {firstNum: "", secondNum: "", operator: ""},
result, display = document.getElementById("display"),
clear = document.getElementById("clearButton").addEventListener("click", clear);

function number(num) {
    //calcNumbers["firstNum"]
    if (calcNumbers["operator"] == "") {
        display.value += num.value;
        calcNumbers["firstNum"] += num.value;
        console.log("first Number: " + calcNumbers["firstNum"]);
    }
    //calcNumbers["secondNum"]
    else if (calcNumbers["operator"] != "") {
        display.value += num.value;
        calcNumbers["secondNum"] += num.value;
        console.log("Second Number: " + calcNumbers["secondNum"]);
    }
}

//sum operator
function add() {
    calcNumbers["operator"] = "+"; 
    console.log("add function");
    display.value += " + ";
}

//subtract operator
function subtract() {
    calcNumbers["operator"] = "-";
    console.log("subtract function"); 
    display.value += " - "; 
}

//multiply operator
function multiply() {
    calcNumbers["operator"] = "*"; 
    console.log("multiply function"); 
    display.value += " * ";
}

//divide operator
function divide() {
    calcNumbers["operator"] = "/";  
    console.log("divide function");
    display.value += " / ";
}

//cleaning
function clear() {
    console.log("clear function");
    calcNumbers["firstNum"] = "";
    calcNumbers["secondNum"] = "";
    calcNumbers["operator"] = "";
    display.value = "";
}

//Result
function equal() {
    console.log("equal function");
    //adding
    display.value += " = ";
    if (calcNumbers["operator"] == "+") {
        console.log("Adding");
        result = parseFloat(calcNumbers["firstNum"]) + parseFloat(calcNumbers["secondNum"]);
        console.log("Result: " + result);
        display.value += result.toString();
        calcNumbers["firstNum"] = result.toString();
    }//subtracting
    else if (calcNumbers["operator"] == "-") {
        console.log("Subtracting");
        result = parseFloat(calcNumbers["firstNum"]) - parseFloat(calcNumbers["secondNum"]);
        console.log("Result: " + result);
        display.value += result.toString();
        calcNumbers["firstNum"] = result.toString();
    }//multiplying
    else if (calcNumbers["operator"] == "*") {
        console.log("Multiplicating");
        result = parseFloat(calcNumbers["firstNum"]) * parseFloat(calcNumbers["secondNum"]);
        console.log("Result: " + result);
        display.value += result.toString();
        calcNumbers["firstNum"] = result.toString();
    }//dividing
    else if (calcNumbers["operator"] == "/") {
        console.log("Dividing");
        result = parseFloat(calcNumbers["firstNum"]) / parseFloat(calcNumbers["secondNum"]);
        console.log("Result: " + result);
        display.value += result.toString();
        calcNumbers["firstNum"] = result.toString();
    }

    calcNumbers["secondNum"] = "";
    calcNumbers["operator"] = "";
}

