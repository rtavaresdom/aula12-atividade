const form = document.getElementById("formLogin");
const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("senha");

const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");

const btnConfirmar = document.getElementById("confirmar");
const btnCancelar = document.getElementById("cancelar");
const btnLimpar = document.getElementById("limpar");

let tentativas = 3;

form.addEventListener("submit", function(evento) {

    evento.preventDefault();

    if (tentativas <= 0) {
        mensagem.textContent = "Acesso bloqueado!";
        mensagem.className = "erro";
        return;
    }

    const login = campoLogin.value.trim();
    const senha = campoSenha.value;

    if (login === "" || senha === "") {
        mensagem.textContent = "Preencha o login e a senha.";
        mensagem.className = "erro";
        return;
    }

    if (login === "ramonfelipe" && senha === "Dom250212") {

        mensagem.textContent = "Acesso válido! Redirecionando...";
        mensagem.className = "sucesso";

        btnConfirmar.disabled = true;

        setTimeout(function() {
            window.location.href = "page1.html";
        }, 1000);

    } else {

        tentativas--;

        if (tentativas > 0) {
            mensagem.textContent = "Acesso inválido! Tente novamente.";
            mensagem.className = "erro";
        } else {
            mensagem.textContent = 
                "Acesso bloqueado! Você esgotou as 3 tentativas.";
            mensagem.className = "erro";
            btnConfirmar.disabled = true;
        }
        tentativasTexto.textContent = 
            "Tentativas disponíveis: " + tentativas;
    }
});

btnLimpar.addEventListener("click", function() {
    campoLogin.value = "";
    campoSenha.value = "";
    mensagem.textContent = "";
    mensagem.className = "";
    campoLogin.focus();
});

btnCancelar.addEventListener("click", function() {
    form.reset();
    mensagem.textContent = "";
    mensagem.className = "";

    campoLogin.focus();
});