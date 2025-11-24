/**
 * Cálculo do IMC
 * @author Rayka Alves Hercilio Silva
 */

let peso, altura, imc

function calcular() {
    //entrada
    peso = formIMC.inputPeso.value
    altura = formIMC.inputAltura.value
    console.log(peso)
    console.log(altura)

    //processamento
    imc = peso / (altura * altura)

    //saída
    formIMC.textIMC.value = `IMC: ${imc.toFixed(2)}`
    //alterar imagem em função do resultado
    if (imc < 18.5) {
        document.getElementById('status').src = "./img/imc2.png"
    } else if (imc > 18.5 <= 24.9) {
        document.getElementById('status').src = "./img/imc3.png"
    } else if (imc > 24.9 <= 29.0) {
        document.getElementById('status').src = "./img/imc4.png"
    }
    
}