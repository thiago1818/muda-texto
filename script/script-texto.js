// Formato Frase (texto)
function firstLetterUpper() {
    let newString = document.getElementById('textarea').value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() })
    document.getElementById('textarea').value = newString
}

function convertToSentenceCase() {
    let theString = document.getElementById('textarea').value
    let newString = firstLetterUpper(theString)
    document.getElementById('textarea').value = newString
}

//Minúsculas
function lowercase() {
    let lowerstring = document.getElementById('textarea').value.toLowerCase()
    document.getElementById('textarea').value = lowerstring
}

//Maiúsculas
function uppercase() {
    let upperstring = document.getElementById('textarea').value.toUpperCase()
    document.getElementById('textarea').value = upperstring
}

//Capitalized
function capitalize() {
    let string = document.getElementById('textarea').value.toLowerCase()
    let strsplit = string.split(' ')
    for (var i = 0; i < strsplit.length; i++) {
        strsplit[i] = strsplit[i].charAt(0).toUpperCase() + strsplit[i].slice(1)
    }
    strcap = strsplit.join(' ')
    document.getElementById('textarea').value = strcap
}

//Invertido
function inverter() {
    let string = document.getElementById('textarea').value
    let strsplit = string.split('')
    strinv = strsplit.reverse()
    invert = strinv.join('')
    document.getElementById('textarea').value = invert
}

//Alternado
function alternado() {
    let string = document.getElementById('textarea').value
    let strsplit = string.split('')
    for (var i = 0; i < strsplit.length; i += 2) {
        strsplit[i] = strsplit[i].toUpperCase()
    }
    straltr = strsplit.join('')
    document.getElementById('textarea').value = straltr
}

//Copiar
function copiar() {
    let copyText = document.getElementById('textarea')
    copyText.select()
    copyText.setSelectionRange(0, 99999) //For mobile devices
    navigator.clipboard.writeText(copyText.value)
    alert("Texto copiado para a área de transferência") //Alerta para o usuário
}

//Apagar
function apagar() {
    document.getElementById('textarea').value = ''
}

//Contador de letras
function contletra() {
    let string = document.getElementById('textarea').value.replace(/\s/g, '').length
    let cont = string.length + 1
    document.getElementById('contletra').innerHTML = 1 + string
}

//Contador de palavras