// criando as variaveis
let idade = document.querySelector("#idade")
let botaoVerificar = document.querySelector("#verificar")
let resultado = document.querySelector('#resultado')

// funcao 
function verificarMaioridade() {
    // convertendo valor
    let converterIdade = Number(idade.value)

    resultado.classList.remove(
        'verdadeiro',
        'falso'
    )
    
    // verificacao
    if(converterIdade >= 18) {
        resultado.innerHTML = `
            <h3>Voce é de maior</h3>
        `
        resultado.classList.add('verdadeiro')
    }else {
        resultado.innerHTML = `
            <h3>Voce não e de maior</h3>
        `
        resultado.classList.add("falso")
    }

}

// evento
botaoVerificar.addEventListener('click', verificarMaioridade)