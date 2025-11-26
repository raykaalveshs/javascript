/** 
 * Estudo das Fuções
 * @author Rayka Alves Hercilio Silva
 * 
 */

// FUNÇÃO SIMPLES
function hello() {
    console.log("Hello funcion")
}

console.log(typeof(hello))
hello()

// FUNÇÃO ANÔNIMA
const hello2 = function () {
    console.log("Hello função anônima")
    // Podemos usar "let" ou "constant" para criar uma função anônima. A vantagem de criar funções dessa forma é armazenar os resultados da execução da função
}

console.log(typeof(hello2))
hello2()

// SIMPLIFICAÇÃO DA FUNÇÃO ANÔNIMA (ARROW FUNCTION)
// "function ()" simplificado para: "() =>"
const hello3 = () => {
    console.log("Hello função anônima simplificada")
}

console.log(typeof(hello3))
hello3()

// SIMPLIFICAÇÃO 2 DA FUNCÃO ANÔNIMA 
// Nesse caso, somente uma linha de código é processada
// Simplificação: _=> (Underline substituí os parênteses e omissão de chaves)
const hello4 = _=> console.log("Hello função anônima simplificada 2")

console.log(typeof(hello4))
hello4()

// FUNÇÃO COM PARÂMETROS E RETORNO
function somar(num1, num2) {
    return console.log(num1 + num2)
}

console.log(typeof(somar))
somar(2,2)

// FUNÇÃO ANÔNIMA COM PARÂMETROS E RETORNO SIMPLIFICADA
const somarA = (num1, num2) => {
    return console.log (num1 + num2)
}

console.log(typeof(somarA))
somarA(3,4)

// FUNÇÃO ANÔNIMA COM PARÂMETROS E RETORNO SIMPLIFICADA 2
// Nesse caso, omitimos chaves e o retorno é implícito
// CUIDADO!
const somarAS = (num1, num2) => console.log(num1 + num2) 

console.log(typeof(somarAS))
somarAS(5,10)