let amigos = [];

function adicionarAmigo() {
    let entradaDoUsuario = document.getElementById("amigo").value;
    if (entradaDoUsuario.trim() !== "") {
        amigos.push(entradaDoUsuario);
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}