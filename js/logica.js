function calcula(){
    let numString = document.getElementById("display-calculadora").value
    let resposta = eval(numString)
    document.getElementById("display-calculadora").value = resposta
} 

function clr(){
    document.getElementById("display-calculadora").value = ""
}

function dis(valor){
    document.getElementById("display-calculadora").value += valor
}

