const OUTPUT = document.getElementById('output-wynik')
var lastComa = false
var lastOper = true
var outputContent

function addVar(war) {
    outputContent = OUTPUT.innerText

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

function addPercentage() {
    let outputContent = OUTPUT.innerText

    if (outputContent != "") {
        if(!['+', '-', '*', '/'].includes(outputContent.charAt(outputContent.length-1))) {
            let isOper, outputLength = outputContent.length, i = -1

            while (i < outputLength && !['+', '-', '*', '/'].includes(isOper)) {
                i++
                isOper = outputContent.charAt(outputLength - 1 - i)
            }

            if (i != 1) {
                let number = parseFloat(outputContent.slice(outputLength - i))
                let percentage = number / 100

                OUTPUT.innerText = outputContent.slice(0, outputLength - i) + percentage
            }
        }
    }
}


function clearAll() {
    OUTPUT.innerText = ""
    lastComa = false
    lastOper = true
}

function clearLast() {
    outputContent = OUTPUT.innerText

    if(outputContent != "") {
        if(lastComa == false) {
            if(lastOper == false) {
                outputContent = outputContent.slice(0,-1)
            } else {
                outputContent = outputContent.slice(0,-1)
                lastOper = false
            }
        } else if(outputContent.slice(-2) == 0) {
            outputContent = outputContent.slice(0,-2)
            lastComa = false
        } else {
            outputContent = outputContent.slice(0,-1) 
        }
    }

    if(['+','-','*','/'].includes(outputContent.slice(-1))) {
        lastOper = true
    }

    OUTPUT.innerText = outputContent
}

function calculate() {
    outputContent = OUTPUT.innerText
    let lastWar = outputContent.slice(-1)
    
    if(outputContent != "") {
            if(!['+','-','*','/'].includes(lastWar)) {
                var result = eval(outputContent)
            } else {
                throw "Last var was an operator!"
            }
    } else {
        result = ""
    }

    if(!isFinite(result)) {
        OUTPUT.innerText = "0"
    } else{
       OUTPUT.innerText = result 
    }    
}

// TODO: clearLast and addPercentage functions