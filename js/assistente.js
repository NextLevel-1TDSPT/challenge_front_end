/* Assistente */

const respostas = [
  "resposta-doacao-comum",
  "resposta-nota-fiscal",
  "resposta-cadastro",
  "resposta-finalizar",
];

function esconderRespostas() {
  respostas.forEach(function (id) {
    document.getElementById(id).classList.remove("show");
  });
}

function mostrarResposta(id) {
  esconderRespostas();
  document.getElementById(id).classList.add("show");
}

document.getElementById("btn-doacao-comum").addEventListener("click", function () {
  mostrarResposta("resposta-doacao-comum");
});

document.getElementById("btn-nota-fiscal").addEventListener("click", function () {
  mostrarResposta("resposta-nota-fiscal");
});

document.getElementById("btn-cadastro").addEventListener("click", function () {
  mostrarResposta("resposta-cadastro");
});

document.querySelectorAll(".btn-voltar").forEach(function (botao) {
  botao.addEventListener("click", esconderRespostas);
});

document.querySelectorAll(".btn-finalizar").forEach(function (botao) {
  botao.addEventListener("click", function () {
    mostrarResposta("resposta-finalizar");
  });
});
