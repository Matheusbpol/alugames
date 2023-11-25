function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botaoAlugaDevolve = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
    let nomeAlugar = 'Alugar';
    let nomeDevolver = 'Devolver';
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botaoAlugaDevolve.textContent = nomeAlugar;
    } else {
            imagem.classList.add('dashboard__item__img--rented');
            botaoAlugaDevolve.textContent = nomeDevolver;
    }
    if (botaoAlugaDevolve.classList.contains('dashboard__item__button--return')){
        botaoAlugaDevolve.classList.remove('dashboard__item__button--return');
    } else {
            botaoAlugaDevolve.classList.add('dashboard__item__button--return');
    }

}

