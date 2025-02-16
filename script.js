// TODO: add a way to change to negative number and vice-versa

const OUTPUT = document.getElementById('output-wynik')
var lastComa = false
var lastOper = true
var outputContent
var operators = ['+', '-', '*', '/']

function addNumber(number) {
    outputContent = OUTPUT.innerText

    OUTPUT.innerText = outputContent + number

    lastOper = false
}

function addOperator(operator) {
    outputContent = OUTPUT.innerText

    if(outputContent.slice(-1) != ".") {
        if(!lastOper) {
            OUTPUT.innerText = outputContent + operator
            lastOper = true
            lastComa = false
        }
    }
}

function addComa() {
    outputContent = OUTPUT.innerText 

    function addZeroComa() {
        OUTPUT.innerText = outputContent + "0."
        lastComa = true
    }

    if(!lastComa) {    
        if(outputContent != "") {
            if(!lastOper) {
                OUTPUT.innerText = outputContent + '.'
                lastComa = true
            } else {
                addZeroComa()
            }
        } else {
            addZeroComa()
        }
    }
}

function addPercentage() {
    let outputContent = OUTPUT.innerText

    if (outputContent != "") {
        if(!operators.includes(outputContent.charAt(outputContent.length-1))) {
            let isOper, outputLength = outputContent.length, i = -1

            while (i < outputLength && !operators.includes(isOper)) {
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

    if(outputContent.length == 1) {
        outputContent = outputContent/100
        OUTPUT.innerText = outputContent
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

    if(operators.includes(outputContent.slice(-1))) {
        lastOper = true
    }

    OUTPUT.innerText = outputContent

    if(OUTPUT.innerText == "") {
        lastOper = true
    }
}

function calculate() {
    outputContent = OUTPUT.innerText
    let lastWar = outputContent.slice(-1)
    
    if(outputContent != "") {
            if(!operators.includes(lastWar)) {
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