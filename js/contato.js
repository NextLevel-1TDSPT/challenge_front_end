/* Validação do formulário de contato */

const formContato = document.querySelector("#form-contato");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

function mostrarErro(campo, mensagem) {
  campo.classList.add("campo-erro");
  document.querySelector("#erro-" + campo.id).textContent = mensagem;
}

function limparErro(campo) {
  campo.classList.remove("campo-erro");
  document.querySelector("#erro-" + campo.id).textContent = "";
}

function emailValido(email) {
  return email.includes("@") && email.includes(".");
}

function validarFormulario(evento) {
  evento.preventDefault();

  const nome = document.querySelector("#nome");
  const telefone = document.querySelector("#telefone");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagem");

  let formularioValido = true;

  if (nome.value.trim() === "") {
    mostrarErro(nome, "Digite o seu nome.");
    formularioValido = false;
  } else {
    limparErro(nome);
  }

  /* Telefone é opcional, mas se preencher precisa ter DDD */
  if (telefone.value.trim() !== "" && telefone.value.trim().length < 10) {
    mostrarErro(telefone, "Digite um telefone válido com DDD.");
    formularioValido = false;
  } else {
    limparErro(telefone);
  }

  if (email.value.trim() === "") {
    mostrarErro(email, "Digite o seu e-mail.");
    formularioValido = false;
  } else if (!emailValido(email.value)) {
    mostrarErro(email, "Digite um e-mail válido, como voce@email.com.");
    formularioValido = false;
  } else {
    limparErro(email);
  }

  if (assunto.value === "") {
    mostrarErro(assunto, "Selecione um assunto.");
    formularioValido = false;
  } else {
    limparErro(assunto);
  }

  if (mensagem.value.trim().length < 10) {
    mostrarErro(mensagem, "Escreva uma mensagem com pelo menos 10 caracteres.");
    formularioValido = false;
  } else {
    limparErro(mensagem);
  }

  if (formularioValido) {
    mensagemSucesso.textContent = "Mensagem enviada com sucesso! Obrigado, " + nome.value.trim() + ".";
    formContato.reset();
  } else {
    mensagemSucesso.textContent = "";
  }
}

formContato.addEventListener("submit", validarFormulario);

/* Apaga o erro do campo enquanto o usuário digita */
const campos = formContato.querySelectorAll("input, select, textarea");

campos.forEach(function (campo) {
  campo.addEventListener("input", function () {
    limparErro(campo);
  });
});
