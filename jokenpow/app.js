/**
 * JokenPô
 * @author Professor José de Assis
 */

function jogar() {
    // VALIDAÇÃO (Se nenhum radio button foi selecionado)
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma Opção")
    } else {
        // LÓGICA PRINCIPAL
        let sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "./img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "./img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "./img/pctesoura.png"
                break
        }
        // VERIFICAR O VENCEDOR, OU DECLARAR EMPATE
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('RESULTADO').innerText = "EMPATE"
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('RESULTADO').innerText = "VOCÊ VENCEU!"
        } else {
            document.getElementById('RESULTADO').innerText = "O COMPUTADOR VENCEU!"
        }

    }
}

function resetar() {
    document.getElementById('pc').src = "./img/pc.png"
    // innerHTML = 
    document.getElementById('RESULTADO').innerHTML = ""
}