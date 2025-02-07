const OUTPUT = document.getElementById('output-wynik')

function addVar(war) {
    var outputContent = OUTPUT.innerText
    
    OUTPUT.innerText = outputContent + war
}

function clearAll() {
    OUTPUT.innerText = ""
}

// TODO: add evaluation, and clear last functions