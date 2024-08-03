let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let item = document.getElementById(`game-${id}`);
    let botao = item.querySelector('.dashboard__item__button');
    let imgDiv = item.querySelector('.dashboard__item__img');
    
    if (botao.classList.contains('dashboard__item__button--return')) {
        alert('Deseja devolver o jogo?');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        imgDiv.classList.remove('dashboard__item__img--rented');
        jogosAlugados--
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imgDiv.classList.add('dashboard__item__img--rented');
        jogosAlugados++
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})