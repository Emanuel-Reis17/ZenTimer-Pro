// Função para abrir e fechar o menu lateral
const menu = document.querySelector('.nav__menu');
const btn = document.querySelector('.menu');

function toggleMenu() {
    if (window.innerWidth <= 425 && menu.style.left == '0%') {
        menu.style.left = '100%';
        btn.innerText = 'menu';
        return true;
    }
        menu.style.left = '0%';
        btn.innerText = 'close';
}

// Função para ver senha
const eyeBtn = document.querySelector('.toggle-pass');
const inputPassword = document.querySelector('#senha');

function togglePassword() {
    if (inputPassword.type == 'password') {
        inputPassword.type = 'text';
        eyeBtn.innerText = 'visibility_off';
        return true;
    }
    inputPassword.type = 'password';
    eyeBtn.innerText = 'visibility';
}