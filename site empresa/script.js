function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
}
function adicionarCarrinho() {
    var aviso = document.getElementById("aviso-carrinho");

    aviso.style.display = "block";

    setTimeout(function() {
        aviso.style.display = "none";
    }, 2000);
}
