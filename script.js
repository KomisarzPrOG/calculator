const OUTPUT = document.getElementById('output-wynik')
var lastComa = false

function addVar(war) {
    var outputContent = OUTPUT.innerText

    if(lastComa == false && war == '.') {
        OUTPUT.innerText = outputContent + war
        lastComa = true
    } else if(war != '.') {
        OUTPUT.innerText = outputContent + war
    }
    if(war == '+' || war == "-" || war == '*' || war == '/') {
        lastComa = false
    }
}

function clearAll() {
    OUTPUT.innerText = ""
}

// TODO: add calculate, clearLast, and addPercentage functions