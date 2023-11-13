const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome esta vazio
    if (nameInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o email esta preenchido e se é valido
    if(emailInput.value === "") {
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se o email esta preechido corretamente
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha deve ter no minimo 8 digitos.");
        return;
    }

    // Verifica se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor selecione a sua situação.");
        return;
    }

    // Verifica se a mensagem foi preenchida
    if(messageTextarea.value === "") {
        alert("Por favor preencha o campo de mensagem")
        return;
    }

    // Se todos os campos estiverem corretament preechidos, envie o form
    form.submit();
});

// Função que ira validar o e-mail
function isEmailValid(email) {

    // criar uma regex para validar o email
    const emailregex = new RegExp(
        // usuario12@host.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailregex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha valida
        return true
    }

    // Senha invalida
    return false
}