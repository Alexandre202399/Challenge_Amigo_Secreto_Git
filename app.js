let amigos = [];

function adicionarAmigo() {
    let entradaDoUsuario = document.getElementById("amigo").value;

    if (entradaDoUsuario.trim() !== "") {
        amigos.push(entradaDoUsuario);
        document.getElementById("amigo").value = "";
        atualizarListaAmigos(amigos)
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos(amigos) {
    const listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    for (let n = 0; n < amigos.length; n++) {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigos[n];

        listaDeAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const numeroAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[numeroAleatorio];

        const listaDeResultado = document.getElementById("resultado");
        listaDeResultado.innerHTML = "";

        const elementoLista = document.createElement("li");
        elementoLista.textContent = `O amigo sorteado foi: ${amigoSorteado}`;

        listaDeResultado.appendChild(elementoLista);
    } else {
        alert("Por favor, adicione um nome na lista.");
    }
}