let amigos = [];

function limparCampoInput() {
    let nomeAmigo = document.getElementById("amigo");
    nomeAmigo.value = "";
}

function atualizarlistaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for(let index = 0; index < amigos.length; index++) {
        listaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
    }
}    

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome!");
    } else {
        amigos.push(nomeAmigo);
        limparCampoInput();
        atualizarlistaAmigos();
    }
    document.getElementById("adicionar").setAttribute("disabled", false);
} 

function limparCampoLista() {
    let elementoLista = document.querySelector("ul");
    elementoLista.innerHTML = "";
}

function sortearAmigo() {
    if (amigos.length > 0) {
        document.getElementById("sortear").setAttribute("disabled", false);
        limparCampoLista();
        let amigoEscolhido = amigos[Math.floor(Math.random() * amigos.length)];
        let resultadoListaAmigos = document.querySelector("#resultado");
        resultadoListaAmigos.innerHTML = `O amigo sorteado é ${amigoEscolhido}`;
    } else {
        document.getElementById("sortear").setAttribute("disabled", true);
    }
} 