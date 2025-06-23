// Cole este código no seu script.js em branco
document.addEventListener('DOMContentLoaded', function () {

    // --- FEATURE 1: EFEITO DE CÍRCULO NOS BOTÕES ---
    const botoes = document.querySelectorAll(".botaoEfeito");
    botoes.forEach((botao) => {
        const circulo = botao.querySelector(".circulo");
        if (circulo) {
            botao.addEventListener("mousemove", function (e) {
                const distanciaBotao = this.getBoundingClientRect();
                const x = e.clientX - distanciaBotao.left;
                const y = e.clientY - distanciaBotao.top;
                circulo.style.top = `${y}px`;
                circulo.style.left = `${x}px`;
            });
        }
    });

    // --- FEATURE 2: PAINEL DE ORÇAMENTO ---
    const container = document.getElementById('container');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    if (container && signUpButton && signInButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }

    // 1. Seleciona os elementos que vamos usar
    const menuOpenBtn = document.getElementById('menu-toggle');
    const menuCloseBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const pageOverlay = document.getElementById('page-overlay'); // Opcional, para escurecer o fundo

    // 2. Função para abrir o menu
    menuOpenBtn.addEventListener('click', () => {
        sideMenu.classList.add('is-active');
        document.body.classList.add('no-scroll'); // Impede a rolagem da página
    });

    // 3. Função para fechar o menu
    function closeMenu() {
        sideMenu.classList.remove('is-active');
        document.body.classList.remove('no-scroll'); // Libera a rolagem
    }

    // 4. Adiciona os eventos de clique nos botões
    menuCloseBtn.addEventListener('click', closeMenu);

    // 5. Permite chamar a função a partir do HTML (para os seus links com onclick)
    // O nome da função no seu HTML é 'toggleMenu', então vamos usar esse nome.
    function toggleMenu() {
        closeMenu();
    }