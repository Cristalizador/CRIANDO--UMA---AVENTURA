function choosePath(choice) {
    let storyText = document.getElementById('story-text');
    let choicesDiv = document.getElementById('choices');

    if (choice === 'esquerda') {
        storyText.innerHTML = "Você segue pelo caminho à esquerda. Após alguns minutos, você encontra uma caverna misteriosa. Você entra ou volta?";
        choicesDiv.innerHTML = `
            <button onclick="choosePath('entrar')">Entrar na caverna</button>
            <button onclick="choosePath('voltar')">Voltar para a trilha</button>
        `;
    } else if (choice === 'direita') {
        storyText.innerHTML = "Você segue pelo caminho à direita. A trilha está tranquila até que você encontra um lago brilhante. Você nada ou continua andando?";
        choicesDiv.innerHTML = `
            <button onclick="choosePath('nadar')">Nadar no lago</button>
            <button onclick="choosePath('continuar')">Continuar andando</button>
        `;
    } else if (choice === 'entrar') {
        storyText.innerHTML = "Você entra na caverna e encontra um tesouro escondido! Parabéns, você venceu!";
        choicesDiv.innerHTML = `
            <button onclick="restartGame()">Recomeçar</button>
        `;
    } else if (choice === 'voltar') {
        storyText.innerHTML = "Você volta para a trilha, mas se perde na floresta. Fim de jogo.";
        choicesDiv.innerHTML = `
            <button onclick="restartGame()">Recomeçar</button>
        `;
    } else if (choice === 'nadar') {
        storyText.innerHTML = "Você decide nadar no lago, mas algo o puxa para o fundo. Fim de jogo.";
        choicesDiv.innerHTML = `
            <button onclick="restartGame()">Recomeçar</button>
        `;
    } else if (choice === 'continuar') {
        storyText.innerHTML = "Você continua andando e encontra uma vila pacífica. Parabéns, você encontrou um lugar seguro!";
        choicesDiv.innerHTML = `
            <button onclick="restartGame()">Recomeçar</button>
        `;
    }
}

function restartGame() {
    document.getElementById('story-text').innerHTML = "Você está em uma floresta escura. Dois caminhos estão à sua frente. Qual você vai seguir?";
    document.getElementById('choices').innerHTML = `
        <button onclick="choosePath('esquerda')">Seguir à esquerda</button>
        <button onclick="choosePath('direita')">Seguir à direita</button>
    `;
}
