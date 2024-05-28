const botao_comida = document.getElementById(`botao_um`)
const botao_eu = document.getElementById(`botao_dois`)
const botao_fixo = document.getElementById(`botao_tres`)
const botao_outros = document.getElementById(`botao_quatro`)

function click (name1, name2){

    name1.addEventListener(`click`, ()=>{

        const x = document.getElementById(name2)
        x.classList.add(`hello`)
    
        setTimeout(() => {
            x.classList.remove(`hello`)
        }, 5000);
    
    })
}

click(botao_comida, "comida")
click(botao_eu, "eu")
click(botao_fixo, "fixo")
click(botao_outros, "outros")