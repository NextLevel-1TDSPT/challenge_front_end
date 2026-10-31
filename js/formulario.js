/* ==========================================================
   NextLevel – Validação do formulário de contato (Sprint 02)
   Confere os campos antes de enviar e mostra mensagens de erro.
   ========================================================== */

const formContato = document.querySelector("#form-contato");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

/* Deixa o campo com borda vermelha e escreve o erro embaixo dele */
function mostrarErro(campo, mensagem) {
  campo.classList.add("campo-erro");
  document.querySelector("#erro-" + campo.id).textContent = mensagem;
}

/* Tira a borda vermelha e apaga o erro do campo */
function limparErro(campo) {
  campo.classList.remove("campo-erro");
  document.querySelector("#erro-" + campo.id).textContent = "";
}

/* Um e-mail simples precisa ter "@" e "." */
function emailValido(email) {
  return email.includes("@") && email.includes(".");
}

/* Confere todos os campos quando o usuário clica em "Enviar mensagem" */
function validarFormulario(evento) {
  evento.preventDefault(); /* impede o envio até tudo estar certo */

  const nome = document.querySelector("#nome");
  const telefone = document.querySelector("#telefone");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagem");

  let formularioValido = true;

  /* Nome: obrigatório */
  if (nome.value.trim() === "") {
    mostrarErro(nome, "Digite o seu nome.");
    formularioValido = false;
  } else {
    limparErro(nome);
  }

  /* Telefone: opcional, mas se preencher precisa ter DDD + número */
  if (telefone.value.trim() !== "" && telefone.value.trim().length < 10) {
    mostrarErro(telefone, "Digite um telefone válido com DDD.");
    formularioValido = false;
  } else {
    limparErro(telefone);
  }

  /* E-mail: obrigatório e no formato certo */
  if (email.value.trim() === "") {
    mostrarErro(email, "Digite o seu e-mail.");
    formularioValido = false;
  } else if (!emailValido(email.value)) {
    mostrarErro(email, "Digite um e-mail válido, como voce@email.com.");
    formularioValido = false;
  } else {
    limparErro(email);
  }

  /* Assunto: precisa escolher uma opção */
  if (assunto.value === "") {
    mostrarErro(assunto, "Selecione um assunto.");
    formularioValido = false;
  } else {
    limparErro(assunto);
  }

  /* Mensagem: obrigatória, com pelo menos 10 letras */
  if (mensagem.value.trim().length < 10) {
    mostrarErro(mensagem, "Escreva uma mensagem com pelo menos 10 caracteres.");
    formularioValido = false;
  } else {
    limparErro(mensagem);
  }

  /* Tudo certo: mostra a mensagem de sucesso e limpa o formulário */
  if (formularioValido) {
    mensagemSucesso.textContent = "Mensagem enviada com sucesso! Obrigado, " + nome.value.trim() + ".";
    formContato.reset();
  } else {
    mensagemSucesso.textContent = "";
  }
}

formContato.addEventListener("submit", validarFormulario);

/* Enquanto o usuário digita, o erro daquele campo some */
const campos = formContato.querySelectorAll("input, select, textarea");

campos.forEach(function (campo) {
  campo.addEventListener("input", function () {
    limparErro(campo);
  });
});
