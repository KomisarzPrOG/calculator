const OUTPUT = document.getElementById('output-wynik')
var lastComa = false
var lastOper = true

function addVar(war) {
    var outputContent = OUTPUT.innerText

    if(outputContent == "" && war == '.' && lastComa == false || lastOper == true && war == '.' && lastComa == false) {
        OUTPUT.innerText = outputContent + "0" + war
        lastComa = true
        lastOper = true
    } else if(lastComa == false && war == '.') {
        OUTPUT.innerText = outputContent + war
        lastComa = true
    } else if(lastOper == false && war == '+' || lastOper == false && war == '-' || lastOper == false && war == '*' || lastOper == false && war == '/') {
        OUTPUT.innerText = outputContent + war
    } else if(war != '.' && war != '+' && war != '-' && war != '*' && war != '/') {
        OUTPUT.innerText = outputContent + war
        lastOper = false
    }
    if(war == '+' || war == "-" || war == '*' || war == '/') {
        lastComa = false
        lastOper = true
    }
}

function clearAll() {
    OUTPUT.innerText = ""
    lastComa = false
    lastOper = true
}

function calculate() {
    outputContent = OUTPUT.innerText
    let lastWar = outputContent.slice(-1)
    
    if(outputContent != "") {
        if(!['+','-','*','/'].includes(lastWar)) {
            var result = eval(outputContent)
        }
    }

    OUTPUT.innerText = result
}

// TODO: add calculate, clearLast, and addPercentage functions