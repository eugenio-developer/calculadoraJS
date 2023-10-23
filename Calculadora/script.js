function calculadoraSoma(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    const result = valor1 + valor2;
    document.getElementById('resultado').innerHTML = result;
}

function calculadoraSubtracao(){
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    const result = valor1 - valor2;
    document.getElementById('resultado').innerHTML = result;
}

function calculadoraMultiplicacao(){
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    const result = valor1 * valor2;
    document.getElementById('resultado').innerHTML = result;
}

function calculadoraDivisao(){
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    if(valor2 == 0){
        document.getElementById('resultado').innerHTML = 'não é possivel dividir por 0';
    }
    else{

        const result = valor1 / valor2;
        document.getElementById('resultado').innerHTML = result;
    }
}

function calculadoraFatorial(){
    const valor1 = parseFloat(document.getElementById('valor1').value)
    let count = 1;

    for(var i = 1; i <= valor1; i++) {
        count *= i;
    }

    document.getElementById('resultado').innerHTML = count;
}

function calculaPotencia(){
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    const result = Math.pow(valor1, valor2)
    document.getElementById('resultado').innerHTML = result
}

function calculaRadiciacao(){
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    const raiz = 1 / valor2;
    const result = Math.pow(valor1, raiz)
    document.getElementById('resultado').innerHTML = result
}

function calculadoraBinario(){
    const valor1 = parseFloat(document.getElementById('valor1').value)

    let resultadoDivisao = valor1;
    let resultado = '';

    let controle = true;

    while (controle) {
        resultado += resultadoDivisao % 2;
        resultadoDivisao = Math.trunc(resultadoDivisao / 2);


        if (resultadoDivisao < 1) {
            controle = false;
        }
    }

    let resultadoFinal = '';

    console.log(resultado.length);

    for(var i = resultado.length - 1; i >= 0; i--) {
        resultadoFinal += resultado[i];

    }

    document.getElementById('resultado').innerHTML = resultadoFinal;
}

function calculadoraOctal(){
    const valor1 = parseFloat(document.getElementById('valor1').value)

    let resultadoDivisao = valor1;
    let resultado = '';

    let controle = true;

    while (controle) {
        resultado += resultadoDivisao % 8;
        resultadoDivisao = Math.trunc(resultadoDivisao / 8);


        if (resultadoDivisao < 1) {
            controle = false;
        }
    }

    let resultadoFinal = '';

    console.log(resultado.length);

    for(var i = resultado.length - 1; i >= 0; i--) {
        resultadoFinal += resultado[i];

    }

    document.getElementById('resultado').innerHTML = resultadoFinal;
}

function calculadoraHexal(){
    const valor1 = parseFloat(document.getElementById('valor1').value)

    let resultadoDivisao = valor1;
    let resultado = '';

    let controle = true;

    while (controle) {

            if(resultadoDivisao % 16 == 10){
                resultado += 'A'
            }
            else if(resultadoDivisao % 16 == 11){
                resultado += 'B'
            }
            else if(resultadoDivisao % 16 == 12){
                resultado += 'C'
            }
            else if(resultadoDivisao % 16 == 13){
                resultado += 'D'
            }
            else if(resultadoDivisao % 16 == 14){
                resultado += 'E'
            }
            else if(resultadoDivisao % 16 == 15){
                resultado += 'F'
            }
            else{
                resultado += resultadoDivisao % 16;
    
            }
   
        resultadoDivisao = Math.trunc(resultadoDivisao / 16);


        if (resultadoDivisao < 1) {
            controle = false;
        }
        }
    

    let resultadoFinal = '';

    console.log(resultado);

    for(var i = resultado.length - 1; i >= 0; i--) {


            resultadoFinal += resultado[i];

    }

    document.getElementById('resultado').innerHTML = resultadoFinal;
}