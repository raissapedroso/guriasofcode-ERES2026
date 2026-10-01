// ETAPA 5 — Primeiro Javascript
//
// Só abra este arquivo quando o blog já estiver montado.
//
// O código procura todos os botões que possuem:
// class="botao-post"
//
// e cria uma ação quando alguém clica neles.

const botoes = document.querySelectorAll(".botao-post");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        // Altere a mensagem entre aspas.
        alert("Você clicou em um dos nossos posts! 💜");

    });

});
