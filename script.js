const OUTPUT = document.getElementById('output-result')
var lastComa = false, lastOperator = true, operatorAdded = false, symbolChanged = false, outputContent, operators = ['+', '-', '*', '/']

function addNumber(number) {
    outputContent = OUTPUT.innerText

    if(outputContent.length == 1 && outputContent == "0") {
        OUTPUT.innerText = ""
        outputContent = ""
    }

    OUTPUT.innerText = outputContent + number

    lastOperator = false
}

function addOperator(operator) {
    outputContent = OUTPUT.innerText

    if(outputContent.slice(-1) != ".") {
        if(!lastOperator) {
            OUTPUT.innerText = outputContent + operator
            lastOperator = true
            operatorAdded = true
            lastComa = false
            symbolChanged = false
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
            if(!lastOperator) {
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

function whereIsOperator(content) {
    let isOper, i=-1, contentLength = content.length
    while (i < contentLength && !operators.includes(isOper)) {
        i++
        isOper = content.charAt(contentLength - 1 - i)
    }
    return i
}

function addPercentage() {
    let outputContent = OUTPUT.innerText, outputLength = outputContent.length, i

    if (outputContent != "") {
        if(!operators.includes(outputContent.charAt(outputLength-1))) {
            i = whereIsOperator(outputContent)

            if (i != 1) {
                let number = parseFloat(outputContent.slice(outputLength - i))
                let percentage = number / 100

                OUTPUT.innerText = outputContent.slice(0, outputLength - i) + percentage
				lastComa = true
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
    lastOperator = true
    operatorAdded = false
}

function clearLast() {
    outputContent = OUTPUT.innerText

    if(outputContent != "") {
        if(lastComa == false) {
            if(lastOperator == false) {
                outputContent = outputContent.slice(0,-1)
            } else {
                outputContent = outputContent.slice(0,-1)
                lastOperator = false
            }
        } else if(outputContent.slice(-2) == 0) {
            outputContent = outputContent.slice(0,-2)
            lastComa = false
        } else {
            outputContent = outputContent.slice(0,-1) 
        }
    }

    if(operators.includes(outputContent.slice(-1))) {
        lastOperator = true
    }

    OUTPUT.innerText = outputContent

    if(OUTPUT.innerText == "") {
        lastOperator = true
        operatorAdded = false
    }
}

function changeSymbol() {
    outputContent = OUTPUT.innerText
    let isOper, outputLength = outputContent.length, i

    if(outputContent != "") {
        if(operatorAdded) {
            if(!symbolChanged) {
                i = whereIsOperator(outputContent)

                if (i != 1) {
                    let number = outputContent.slice(outputLength - i)

                    OUTPUT.innerText = outputContent.slice(0, outputLength - i) + "-" + number
                    symbolChanged = true
                }
            } else {
                i = whereIsOperator(outputContent)

                if (i != 1) {
                    let number = outputContent.slice(outputLength - i)

                    OUTPUT.innerText = outputContent.slice(0, outputLength - i - 1) + number
                    symbolChanged = false
                }
            }
        } else {
            if(outputContent.slice(0,1) == "-") {
                OUTPUT.innerText = outputContent.slice(1,outputContent.length)
            } else {
                OUTPUT.innerText = "-" + outputContent
            }
        }
    }
}

function calculate() {
    outputContent = OUTPUT.innerText
    let lastWar = outputContent.slice(-1)
    
    if(outputContent != "") {
            if(!operators.includes(lastWar)) {
                var result = eval(outputContent)
                symbolChanged = false
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