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