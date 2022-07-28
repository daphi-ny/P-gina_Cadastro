var email = document.getElementById('email');
var senha = document.getElementById('senha');
var formulario = document.querySelector('form');
var texto = document.getElementById('texto');
var textoEmail = document.getElementById('textoEmail');
var textoSenha = document.getElementById('textoSenha');
var textoEmail2 = document.getElementById('textoEmail');
var textoSenha2 = document.getElementById('textoSenha');
var email2 = document.getElementById('email2');
var senha2 = document.getElementById('senha2');

formulario.addEventListener('submit', (e) => {
    if (email.value == '' && senha.value == '' || email2.value == '' && senha2.value == '' ) {
        texto.textContent = 'Preencha todos os campos'
        console.log(senha.value);
        console.log(email.value);
        console.log(senha2.value);
        console.log(email2.value);
    }
    
    (e).preventDefault()                           //os valores permanecem
})

// Validação email

email.addEventListener('keyup', () => {     // "keyup" valida durante a digitação
    if(validaEmail(email.value) !== true) {
    textoEmail.textContent = 'Exemplo: fluano@gmail.com'
} else {
    textoEmail.textContent =''
}
})

function validaEmail(email) {
    var emailV = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailV.test(email)
}

// Validação da confirmação de email

email2.addEventListener('keyup', () => {     
    if(validaEmail2(email2.value) !== true) {
    textoEmail2.textContent = 'Exemplo: fulano@gmail.com'
} else {
    textoEmail2.textContent =''
}
})

function validaEmail2(email) {
    var emailV = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailV.test(email)
}

// Validação senha 

senha.addEventListener('keyup', () => {    
    if(validaSenha(senha.value) !== true) {
    textoSenha.textContent = 'Exemplo: Senha12@'
} else {
    textoSenha.textContent =''
}
})

function validaSenha(senha2) {
    var senhaVl = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return senhaVl.test(senha2)
}


// validação da confirmação de senha

senha2.addEventListener('keyup', () => {    
    if(validaSenha2(senha2.value) !== true) {
    textoSenha2.textContent = 'Exemplo: Senha12@'
} else {
    textoSenha2.textContent =''
}
})

function validaSenha2(senha2) {
    var senhaVl = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return senhaVl.test(senha2)
}



// Confirmação senha

senha2.addEventListener('keyup', () => {  
    if((senha.value) !== (senha2.value)){
    textoSenha.textContent = 'As senhas devem coincidir'
} else {
    textoSenha.textContent =''
}
})

// Confirmação email

email2.addEventListener('keyup', () => {  
    if((email.value) !== (email2.value)){
    textoEmail.textContent = 'Os email devem coincidir'
} else {
    textoEmail.textContent =''
}
})
