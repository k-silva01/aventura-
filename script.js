let posicaoJogador = 0;
let pontos = 0;
let obstaculos = [2, 4];  // Campos onde há obstáculos

const campos = document.querySelectorAll('.campo');
const resultado = document.getElementById('resultado');

function atualizarTela() {
    // Limpar a trilha
    campos.forEach(campo => campo.classList.remove('avanco', 'obstaculo'));

    // Atualizar posição do jogador
    campos[posicaoJogador].classList.add('avanco');

    // Marcar obstáculos
    obstaculos.forEach(obstaculo => {
        campos[obstaculo].classList.add('obstaculo');
    });

    // Exibir o resultado
    if (posicaoJogador === 5) {
        resultado.innerHTML = `<h3>Você ganhou! Pontos: ${pontos}</h3>`;
    } else {
        resultado.innerHTML = `Pontos: ${pontos}`;
    }
}

function moverJogador() {
    if (posicaoJogador < 5) {
        posicaoJogador++;

        // Verificar se o jogador encontrou um obstáculo
        if (obstaculos.includes(posicaoJogador)) {
            pontos -= 10;  // Perde pontos ao encontrar obstáculo
        } else {
            pontos += 5;   // Ganha pontos ao avançar
        }

        atualizarTela();
    }
}

// Iniciar o jogo
atualizarTela();
