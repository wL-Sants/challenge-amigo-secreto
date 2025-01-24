//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        atualizarListaAmigos();
    } else {
        alert('Por favor, insira um nome.');
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para embaralhar a lista de amigos
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigoSecreto(amigos) {
    let sorteio = {};
    let amigosEmbaralhados = embaralhar([...amigos]);

    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === amigosEmbaralhados[i]) {
            return sortearAmigoSecreto(amigos); // Se alguém tirar a si mesmo, refaz o sorteio
        }
        sorteio[amigos[i]] = amigosEmbaralhados[i];
    }

    return sorteio;
}

// Função para sortear e exibir o resultado
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }
    let resultadoSorteio = sortearAmigoSecreto(amigos);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    for (let amigo in resultadoSorteio) {
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${resultadoSorteio[amigo]}`;
        resultadoDiv.appendChild(li);
    }
}