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
